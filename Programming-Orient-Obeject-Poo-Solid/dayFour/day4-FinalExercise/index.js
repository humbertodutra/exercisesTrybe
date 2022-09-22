/* eslint-disable import/extensions */
// index.ts
const __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get() { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
const __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, 'default', { enumerable: true, value: v });
}) : function (o, v) {
    o.default = v;
});
const __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    const result = {};
    if (mod != null) for (const k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P((resolve) => { resolve(value); }); }
    return new (P || (P = Promise))((resolve, reject) => {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importStar(require('express'));
// eslint-disable-next-line import/no-unresolved
const Plants_1 = __importDefault(require('./Plants'));

const app = (0, express_1.default)();
const plantsModule = new Plants_1.default();
app.use(express_1.default.json());
const plantsRouter = (0, express_1.Router)();
const PORT = process.env.PORT || 3000;
plantsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plants = yield plantsModule.getPlants();
    res.status(200).json(plants);
}));
plantsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const plant = yield plantsModule.getPlantById(id);
    if (!plant) { return res.status(404).json({ message: 'Plant not Found!' }); }
    res.status(200).json(plant);
}));
plantsRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteSucess = yield plantsModule.removePlantById(id);
    if (!deleteSucess) { return res.status(404).json({ message: 'Plant not Found!' }); }
    res.status(204).end();
}));
plantsRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newPlant = req.body;
    const plant = yield plantsModule.editPlant(id, newPlant);
    res.status(200).json(plant);
}));
plantsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPlant = req.body;
    const plant = yield plantsModule.savePlant(newPlant);
    res.status(201).json(plant);
}));
app.use('/plants', plantsRouter);
app.get('/sunny/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const plant = yield plantsModule.getPlantsThatNeedsSunWithId(id);
    res.status(200).json(plant);
}));
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
