const awilix = require('awilix');

import controllers from '@controllers/index';
import services from '@services/index';
import repositories from '@repositories/index';
import dbAndModels from '@db/index';

const diContainer = awilix.createContainer({ injectionMode: awilix.InjectionMode.PROXY });
diContainer.register({ ...dbAndModels, ...controllers, ...services, ...repositories });

export default diContainer;