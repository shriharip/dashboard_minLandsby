/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Content',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      hidden: true,
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: 'Dynamic Table' }
    },
    {
      path: 'drag-table',
      hidden: true,
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: 'Drag Table' , hidden: true}
    },
    {
      path: 'inline-edit-table',
      hidden: true,
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: 'Inline Edit', hidden: true }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: 'Posts' }
    }
  ]
}
export default tableRouter
