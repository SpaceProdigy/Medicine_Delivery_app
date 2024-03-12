import mongoose from 'mongoose';

const DB_KEY = `fRcF9Hmv6mH02YXR`;

const DB_HOST = `mongodb+srv://Oleg:${DB_KEY}@cluster0.gkkp4ao.mongodb.net/drugs24?retryWrites=true&w=majority`;

mongoose.connect(DB_HOST);
