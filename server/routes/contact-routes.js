import express from 'express'
import { saveContact } from '../controller/contact-controller.js';
export const contactRouter = express.Router();

contactRouter.post('/save-contact', saveContact)