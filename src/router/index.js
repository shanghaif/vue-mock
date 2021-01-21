import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:{
      name:'login'
    }
  },
  {
    path: '/menuLists',
    name: 'menuLists',
    component: () => import('../components/menuLists.vue'),
    children:[
      {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('../views/statistics.vue'),
        meta: ['首页管理','系统首页']
      },
      {
        path: '/AskRecord',
        name: 'AskRecord',
        component: () => import('../views/askManage/askRecord.vue'),
        meta: ['咨询管理','咨询记录']
      },
      {
        path: '/AskSet',
        name: 'AskSet',
        component: () => import('../views/askManage/askSet.vue'),
        meta: ['咨询管理','咨询设置']
      },
      {
        path: '/WarnData',
        name: 'WarnData',
        component: () => import('../views/warnData/warnData.vue'),
        meta: ['预警数据']
      },
      // 健康管理
      {
        path: '/HealthLecture',
        name: 'HealthLecture',
        component: () => import('../views/healthLecture/healthLecture.vue'),
        meta: ['健康管理']
      },
      {
        path: '/UploadLecture',
        name: 'UploadLecture',
        component: () => import('../views/healthLecture/uploadLecture'),
        meta: ['健康管理','添加讲座']
      },
      {
        path: '/ClassManage',
        name: 'ClassManage',
        component: () => import('../views/healthLecture/classManage/classManage'),
        meta: ['健康管理','分类管理'],
      },
      {
        path: '/AddClassMange',
        name: 'AddClassMange',
        component: () => import('../views/healthLecture/classManage/addClassMange'),
        meta: ['健康管理','分类管理','添加分类']
      },
      {
        path: '/AddLecture',
        name: 'AddLecture',
        component: () => import('../views/healthLecture/addLecture'),
        meta: ['健康管理','添加讲座']
      },
      // 患者管理
      {
        path: '/PatientList',
        name: 'PatientList',
        component: () => import('../views/patientManage/patientList/patientList'),
        meta: ['健康管理','添加讲座']
      },
      {
        path: '/PatientWatch',
        name: 'PatientWatch',
        component: () => import('../views/patientManage/patientList/watch'),
        meta: ['健康管理','添加讲座']
      },
      {
        path: '/WaitAppointment',
        name: 'WaitAppointment',
        component: () => import('../views/patientManage/waitAppointment'),
        meta: ['待预约']
      },
      {
        path: '/TestRecord',
        name: 'TestRecord',
        component: () => import('../views/patientManage/testRecord'),
        meta: ['检测记录']
      },
      {
        path: '/WaitVisit',
        name: 'WaitVisit',
        component: () => import('../views/patientManage/waitVisit'),
        meta: ['待随访']
      },
      {
        path: '/HealthMsg',
        name: 'HealthMsg',
        component: () => import('../views/patientManage/healthMsg'),
        meta: ['健康消息']
      },
      {
        path: '/BirthdayWish',
        name: 'BirthdayWish',
        component: () => import('../views/patientManage/birthdayWish'),
        meta: ['生日祝福']
      },
      {
        path: '/Broadcast',
        name: 'Broadcast',
        component: () => import('../views/patientManage/broadcast'),
        meta: ['广播通知']
      },
      {
        path: '/LiveHome',
        name: 'LiveHome',
        component: () => import('../views/equipment/liveHome'),
        meta: ['居间宝设备']
      },
      {
        path: '/TreatHome',
        name: 'TreatHome',
        component: () => import('../views/equipment/treatHome'),
        meta: ['诊间包设备']
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path:'/notFound',
    name:'notFound',
    component:() => import('../views/notFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
