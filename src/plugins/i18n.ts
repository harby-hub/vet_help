import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    legacy         : false ,
    locale         : 'en'  ,
    fallbackLocale : 'en'
})

export default async function( Application : any ) {
    Application.use(i18n)
}
