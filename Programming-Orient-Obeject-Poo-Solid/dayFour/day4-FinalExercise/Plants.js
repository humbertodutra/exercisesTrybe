"use strict";
// Plants.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const crypto_1 = require("crypto");
const path_1 = __importDefault(require("path"));
var FileType;
(function (FileType) {
    FileType[FileType["Plants"] = 0] = "Plants";
    FileType[FileType["OpsInfo"] = 1] = "OpsInfo";
})(FileType || (FileType = {}));
// callbacks
const plantsNeedSun = (id) => (plant) => plant.id === id
    && plant.needsSun
    && (!plant.specialCare
        || plant.specialCare.waterFrequency > 2);
class Plants {
    constructor() {
        this.PLANTS_PATH = path_1.default.join(__dirname, 'plantsData.json');
        this.OPS_INFO_PATH = path_1.default.join(__dirname, 'opsInfo.json');
    }
    updateOpsInfo(incrementAmount = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const opsInfoRaw = yield promises_1.default.readFile(this.OPS_INFO_PATH, { encoding: 'utf8' });
            const opsInfo = JSON.parse(opsInfoRaw);
            opsInfo.createdPlants += incrementAmount;
            this.saveFile(FileType.OpsInfo, opsInfo);
        });
    }
    saveFile(type, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let filePath;
            if (type === FileType.Plants)
                filePath = this.PLANTS_PATH;
            else if (type === FileType.OpsInfo)
                filePath = this.OPS_INFO_PATH;
            else
                return null;
            yield promises_1.default.writeFile(filePath, JSON.stringify(data, null, 2));
        });
    }
    static initPlant(plant) {
        const { id, breed, needsSun, origin, specialCare, size } = plant;
        const waterFrequency = needsSun
            ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
            : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
        const newPlant = {
            id,
            breed,
            needsSun,
            origin,
            specialCare: Object.assign(Object.assign({}, specialCare), { waterFrequency }),
            size,
        };
        return newPlant;
    }
    getPlants() {
        return __awaiter(this, void 0, void 0, function* () {
            const plantsRaw = yield promises_1.default.readFile(this.PLANTS_PATH, { encoding: 'utf8' });
            const plants = JSON.parse(plantsRaw);
            return plants;
        });
    }
    getPlantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const plants = yield this.getPlants();
            const plantById = plants.find((plant) => plant.id === id);
            if (!plantById)
                return null;
            return plantById;
        });
    }
    removePlantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const plants = yield this.getPlants();
            const removedPlant = plants.find((plant) => plant.id === id);
            if (!removedPlant)
                return null;
            const newPlants = plants.filter((plant) => plant.id !== id);
            this.saveFile(FileType.Plants, newPlants);
            yield this.updateOpsInfo(-1);
            return removedPlant;
        });
    }
    getPlantsThatNeedsSunWithId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const plants = yield this.getPlants();
            const filteredPlants = plants.filter(plantsNeedSun(id));
            return filteredPlants;
        });
    }
    editPlant(plantId, newPlant) {
        return __awaiter(this, void 0, void 0, function* () {
            const plants = yield this.getPlants();
            const updatedPlants = plants.map((plant) => {
                if (plant.id === plantId)
                    return Object.assign(Object.assign({}, newPlant), { id: plant.id });
                return plant;
            });
            this.saveFile(FileType.Plants, updatedPlants);
            return newPlant;
        });
    }
    savePlant(plant) {
        return __awaiter(this, void 0, void 0, function* () {
            const plants = yield this.getPlants();
            const newPlant = Plants.initPlant(Object.assign(Object.assign({}, plant), { id: (0, crypto_1.randomUUID)() }));
            plants.push(newPlant);
            this.saveFile(FileType.Plants, plants);
            yield this.updateOpsInfo(1);
            return newPlant;
        });
    }
}
exports.default = Plants;
