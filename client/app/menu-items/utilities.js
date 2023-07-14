// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '../../node_modules/@tabler/icons-react';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-color',
            title: 'Inventory',
            type: 'item',
            url: '/inventory',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Customers',
            type: 'item',
            url: '/customers',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Finance',
            type: 'item',
            url: '/utils/shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        }
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/utils/icons/tablericons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/utils/icons/materialicons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default utilities;
