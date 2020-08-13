import mongoose from 'mongoose';

const ModelNameSchema = new mongoose.Schema({
    //
});

const ModelName = mongoose.model('ModelName', ModelNameSchema);
export default ModelName;
