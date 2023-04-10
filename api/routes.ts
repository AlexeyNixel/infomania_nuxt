export enum Routes {
    META_ROUTE = '/api/meta',
    META_MODEL_ROUTE = '/api/meta/model',
    LOGIN_ROUTE = '/api/auth/login',
    BULK_CREATE_ROUTE = '/api/bulk/create',
    ENTRY_ROUTE = '/api/entry/',
    MENU_ROUTE = '/api/menu/',
    MENU_MENU_ITEMS_ROUTE = '/api/menu/menu-items/',
    MENU_ITEM_ROUTE = '/api/menu-item/',
    DEPARTMENT_ROUTE = '/api/department/',
    RUBRIC_ROUTE = '/api/rubric/',
    AFFICHE_ROUTE = '/api/affiche/',
    UPLOAD_ROUTE = '/api/upload/',
    UPLOAD_EXHIBITION_ROUTE = '/api/upload/exhibition/',
    MAIN_SLIDER_ROUTE = '/api/main-slider/',
    FILE_ROUTE = '/api/file/',
    DOCUMENT_ROUTE = '/api/document/',
}

export const getUrl = (url: Routes) => {
    return `http://api.infomania.ru${url}`
}