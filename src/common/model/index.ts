import { dbConfig } from '../loaders/database';
import { DocumentVectorFactory } from './document.vectors.model';

import { WorkspaceFactory } from './workspace.model';
import { WorkspaceDocumentFactory } from './workspaceDocuments.model';

export const Workspace = WorkspaceFactory(dbConfig);
export const WorkspaceDocument = WorkspaceDocumentFactory(dbConfig);
export const DocumentVector = DocumentVectorFactory(dbConfig);
