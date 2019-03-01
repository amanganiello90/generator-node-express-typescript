import { Router } from 'express';
import { CarTO } from '../transfer-objects/car-to';
const carRouter: Router = Router();

carRouter
  .route('/cars')
  .post((req: any, res: any) => {
    const carTO = new CarTO ('1', req.body.car_name);
    res.json({ message: 'Car created!', carTO });
  })
  .get((req: any, res: any) => {
    const carTO = new CarTO ('1', 'MockName');
    res.json({ message: 'Mock List', carTO });
  });

  carRouter
  .route('/cars/:car_id')
  .get((req: any, res: any) => {
    const carTO = new CarTO(req.params.car_id, 'BMW');
    res.json({ carTO });
  })
  .put((req: any, res: any) => {
    const carTO = new CarTO(
      req.params.car_id,
      'BMW Updated'
    );
    const newName = req.body.car_name;
    res.json({
      carTO,
      car_new_name: newName,
    });
  })
  .delete((req: any, res: any) => {
    res.json({ message: 'Successfully deleted' });
  });

export default carRouter;
