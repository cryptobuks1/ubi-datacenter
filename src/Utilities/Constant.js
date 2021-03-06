export default {
    //api: 'http://192.168.1.109/api/datacenter/api.asmx/',
    api: 'http://datacenter.ubi-as.com/api/v1/api.asmx/',
   //site: 'http://192.168.1.9/',
    site: 'http://ubi-as.com/',
    public_path: '',
    api_url : window.location.hostname,
    api_protocol: window.location.protocol,
    api_full_url: window.location.origin,
    header: {'Content-Type': 'application/x-www-form-urlencoded'},
    server_error: 'Unable to connect to server. Please try again!',
    pagesinsert: 'pagesinsert',
    pagesgetall: 'pagesgetall',
    pagesgetbyid: 'pagesgetbyid',
    pagesshowheader: 'pagesshowheader',
    pageseditheader: 'pageseditheader',
    pagesshowfooter: 'pagesshowfooter',
    pageseditfooter: 'pageseditfooter',
    pageseditvideo: 'pageseditvideo',
    pagesshowsidebar: 'pagesshowsidebar',
    pageseditsidebar: 'pageseditsidebar',
    pagesgetlabels: 'pagesgetlabels',
    pagesinsertlabel: 'pagesinsertlabel',
    pagesinsertstraightlineannotation: 'pagesinsertstraightlineannotation',
    pageseditstraightlineannotation: 'pageseditstraightlineannotation',
    pagesgetstraightlineannotation: 'pagesgetstraightlineannotation',
    pagesdeletestraightlineannotation: 'pagesdeletestraightlineannotation',
    pagesgetbyslug: 'pagesgetbyslug',
    pageseditsettings: 'pageseditsettings',
    pagesgetlabelbyid: 'pagesgetlabelbyid',
    login: 'login',
    getuseraccessrights:  'getuseraccessrights',
    getuseraccessrightsv2: 'getuseraccessrightsv2',
    getallemployee: 'getallemployee',
    getproject: 'getproject',
    settingsget: 'settingsget',
    clustergetlist: 'clustergetlist',
    clustergetlistv2: 'clustergetlistv2',
    getuserbyid: 'getuserbyid',
    getuserotlevel2: 'getuserotlevel2',
    getallactiveusers: 'getallactiveusers',
    insertdeleteaccessrights: 'insertdeleteaccessrights',
    insertusermenuitems: 'insertusermenuitems',
    pagesvideoinsertsubtitle: 'pagesvideoinsertsubtitle',
    pagesvideoeditsubtitle: 'pagesvideoeditsubtitle',
    pagesvideogetsubtitle: 'pagesvideogetsubtitle',
    writeVTT: 'writeVTT',
    pagesvideodeletesubtitle: 'pagesvideodeletesubtitle',
    videosgetassets: 'videosgetassets',
    videosinsertasset: 'videosinsertasset',
    videosdeleteasset: 'videosdeleteasset',
    pagesshowvideo: 'pagesshowvideo',
    pagesshowstraightline: 'pagesshowstraightline',
    videoscreatelibrary: 'videoscreatelibrary',
    videosupdatelibrarytheme: 'videosupdatelibrarytheme',
    videosgetalllibrarytheme: 'videosgetalllibrarytheme',
    videosuselibrarytheme: 'videosuselibrarytheme',
    videogetlibrarybyid: 'videogetlibrarybyid',
    videogetalllibrary: 'videogetalllibrary',
    joborderinsertsupplier: 'joborderinsertsupplier',
    joborderinsertproject: 'joborderinsertproject',
    jobordergetallsuppliers: 'jobordergetallsuppliers',
    jobordergetallprojects: 'jobordergetallprojects',
    jobordergetallitems: 'jobordergetallitems',
    jobordercreatenew: 'jobordercreatenew',
    jobordergetbycreatedby: 'jobordergetbycreatedby',
    pagesgetstraighline: 'pagesgetstraighline',
    pagesupdatesld: 'pagesupdatesld',
    billingscreatenew: 'billingscreatenew',
    billingsgetall: 'billingsgetall',
    joborderdelete: 'joborderdelete',
    joborderedit: 'joborderedit',
    supplierdelete: 'supplierdelete',
    supplieredit: 'supplieredit',
    projectsedit: 'projectsedit',
    projectsdelete: 'projectsdelete',
    getimage: 'getimage',
    videosinsertassetlibrary: 'videosinsertassetlibrary',
    sendusercredentials: 'sendusercredentials',
    pagesdeletepage: 'pagesdeletepage',
    videosdeletelibrary: 'videosdeletelibrary',
    jobordergetbysupplier: 'jobordergetbysupplier',
    jobordergetbyproject: 'jobordergetbyproject',
    jocancelcontractor: 'jocancelcontractor',
    jocancelproject: 'jocancelproject',
    jocanceljo: 'jocanceljo',
    jocancelitem: 'jocancelitem',
    joborderedititem: 'joborderedititem',
    joborderdeletelitem: 'joborderdeletelitem',
    joborderdeletejo: 'joborderdeletejo',
    joborderdeleteproject: 'joborderdeleteproject',
    joborderdeletecontractor: 'joborderdeletecontractor',
    ubiitemscreatenew: 'ubiitemscreatenew',
    pagesshowsubtitle: 'pagesshowsubtitle',
    checksession: 'checksession',
    videogetlibrarybyidpublic: 'videogetlibrarybyidpublic',
    videosgetassetspublic: 'videosgetassetspublic',
    jobordergetbybillingdate: 'jobordergetbybillingdate',
    sendresetpasswordinstructions: 'sendresetpasswordinstructions',
    resetpassword: 'resetpassword',
    getallevents: 'getallevents',
    accomplishmentcreatenew: 'accomplishmentcreatenew',
    accomplishmentgetall: 'accomplishmentgetall',
    materialsreceivinggetunsyncedreports: 'materialsreceivinggetunsyncedreports',
    materialsreceivinggetsyncedreports: 'materialsreceivinggetsyncedreports',
    scanbilling: 'scanbilling',
    billingreportcreatebillingcode: 'billingreportcreatebillingcode',
    billingreportcreatebillingreport: 'billingreportcreatebillingreport',
    billingreportsearchbillingcode: 'billingreportsearchbillingcode',
    billingreportcreatebillingreportbybillingcodeandsupplier: 'billingreportcreatebillingreportbybillingcodeandsupplier',
    billingreportcreatebillingreporthistory: 'billingreportcreatebillingreporthistory',
    pocreatenew: 'pocreatenew',
    poimportsuppliercsv: 'poimportsuppliercsv',
    poimportpowithsupplieranditem: 'poimportpowithsupplieranditem',
    poimportpowithsupplieranditemv2: 'poimportpowithsupplieranditemv2',
    pocreatenewv2: 'pocreatenewv2',
    pogetallsuppliers: 'pogetallsuppliers',
    poinsertsupplier: 'poinsertsupplier',
    pogetall: 'pogetall',
    ubimaterialsreportgetall: 'ubimaterialsreportgetall',
    ubimaterialsreportgetfiltered: 'ubimaterialsreportgetfiltered',
    ubimaterialsreportgetprojectlist: 'ubimaterialsreportgetprojectlist',
    poeditvolume: 'poeditvolume',
    ubimaterialsreceivinginsertreport: 'ubimaterialsreceivinginsertreport',
    validatetoken: 'validatetoken'
 } 