import { Router, Request, Response } from 'express';
import status_code from '../../common/utils/StatusCodes';
import IWorkspace from '../interface/IWorkspace';
import * as l10n from 'jm-ez-l10n';
import { WORKSPACE_SCHEMA } from '../schema/workspace.schema';
import { setupMulter } from '../../common/utils/multer';
const { handleUploads } = setupMulter();

const route = Router();

export default (app: Router) => {
  app.use('/workspaces', route);
  route.post('/', WORKSPACE_SCHEMA.CREATE_WORKSPACE, createWorkspace);
  route.get('/', WORKSPACE_SCHEMA.LIST_WORKSPACE, getWorkspaces);
  route.get('/:slug', WORKSPACE_SCHEMA.FIND_WORKSPACE, findWorkspace);
  route.patch('/:slug', WORKSPACE_SCHEMA.UPDATE_WORKSPACE, updateWorkspaceSlug);
  route.put(
    '/:slug/embedding',
    WORKSPACE_SCHEMA.UPDATE_WORKSPACE,
    updateWorkspaceSlug,
  );
  route.put('/:slug/upload', handleUploads.single('file'), uploadFile);
};

const createWorkspace = async (req: Request, res: Response) => {
  const data = req.body;
  IWorkspace.createWorkspace(data)
    .then((response) => {
      return res.status(response.status).json(response);
    })
    .catch((e) => {
      return res.status(status_code.INTERNAL_SERVER_ERROR).json({
        status: status_code.INTERNAL_SERVER_ERROR,
        message: l10n.t('SOMETHING_WENT_WRONG'),
      });
    });
};

const getWorkspaces = async (req: Request, res: Response) => {
  const data = req.query;
  IWorkspace.getWorkspaces(data)
    .then((response) => {
      return res.status(response.status).json(response);
    })
    .catch((e) => {
      return res.status(status_code.INTERNAL_SERVER_ERROR).json({
        status: status_code.INTERNAL_SERVER_ERROR,
        message: l10n.t('SOMETHING_WENT_WRONG'),
      });
    });
};

const findWorkspace = async (req: Request, res: Response) => {
  const data = req.params;
  IWorkspace.findWorkspace(data)
    .then((response) => {
      return res.status(response.status).json(response);
    })
    .catch((e) => {
      return res.status(status_code.INTERNAL_SERVER_ERROR).json({
        status: status_code.INTERNAL_SERVER_ERROR,
        message: l10n.t('SOMETHING_WENT_WRONG'),
      });
    });
};

const updateWorkspaceSlug = async (req: Request, res: Response) => {
  const data = req.body;
  data.slug = req.params;
  IWorkspace.updateWorkspaceSlug(data)
    .then((response) => {
      return res.status(response.status).json(response);
    })
    .catch((e) => {
      return res.status(status_code.INTERNAL_SERVER_ERROR).json({
        status: status_code.INTERNAL_SERVER_ERROR,
        message: l10n.t('SOMETHING_WENT_WRONG'),
      });
    });
};

const uploadFile = async (req: Request, res: Response) => {
  const data = req.body;
  data.slug = req.params;
  data.file = req.file;
  IWorkspace.uploadFile(data)
    .then((response) => {
      return res.status(response.status).json(response);
    })
    .catch((e) => {
      return res.status(status_code.INTERNAL_SERVER_ERROR).json({
        status: status_code.INTERNAL_SERVER_ERROR,
        message: l10n.t('SOMETHING_WENT_WRONG'),
      });
    });
};
