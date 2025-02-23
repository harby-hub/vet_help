import { ref , watch } from 'vue'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref as dbRef } from 'firebase/database'
import { useDatabaseObject , VueFire , VueFireDatabaseOptionsAPI } from 'vuefire'
import dataJson from  '@/data.json' 

interface data{ landing_page : {
    sections : Array< {
        type      : 'heros' | 'brochure' | 'services' | 'counters' | 'reviews' | 'contactus' ,
        is_active : boolean ,
        translate : {
            en : { }
            ar : { }
        } ,
    } > ,
}, 
variables ?: {
    map         ?: string
    facebook    ?: string
    whatsapp    ?: string
    messenger   ?: string
    title       ?: string
    phone       ?: string
    en_address  ?: string
    ar_address  ?: string
    footer      ?: string
    Instagram   ?: string
    sheet       ?: string
    mobilePrifx ?: { is_active : boolean , icon : string , code : string , value : string }
} }

export const FirestoreDatabase = ref( dataJson.landing_page )

if( import.meta.env.PROD ) {
    let dataFirbase = useDatabaseObject( dbRef( getDatabase ( initializeApp( {
        apiKey            : 'AIzaSyC-PC99v_D8o7wTTlrMPGbck4PulEQKx5I'                                  ,
        authDomain        : 'vet-help-7caaa.firebaseapp.com'                                           ,
        databaseURL       : 'https://vet-help-7caaa-default-rtdb.asia-southeast1.firebasedatabase.app' ,
        projectId         : 'vet-help-7caaa'                                                           ,
        storageBucket     : 'vet-help-7caaa.firebasestorage.app'                                       ,
        messagingSenderId : '91620582377'                                                              ,
        appId             : '1:91620582377:web:74b9ecd833a49370212178'                                 ,
        measurementId     : 'G-C007TC7729'                                                             ,
    } ) ) , 'landing_page' ) )
    watch( dataFirbase , ( newdata , old ) => FirestoreDatabase.value = newdata )
} 

export default async function( Application : any ) { }