import type { MockMethod } from 'vite-plugin-mock'

const testMock: MockMethod[] = [
  {
    url: '/api/test',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          'data|10': [
            {
              id: '@guid',
              name: '@cname',
              'age|20-30': 23,
              'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
            }
          ]
        }
      }
    }
  }
]

export default testMock
