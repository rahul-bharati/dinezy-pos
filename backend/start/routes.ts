/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => 'It works!')
router
  .group(() => {
    router.get('/', async () => ({
      Hello: 'World',
    }))
  })
  .prefix('/api')

router.any('*', ({ response }) => response.status(404).send({ message: 'Not Found' }))
