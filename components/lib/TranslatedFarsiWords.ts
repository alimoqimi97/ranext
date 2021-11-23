import { TranslationMessages } from "ra-core";

// const TranslatedFarsiWords : TranslationMessages = {
//     ir: {
//         auth: {
//             username: 'نام کاربری',
//             password: 'رمز عبور',
//             login: 'ورود',
//             phoneNumber: 'شماره تلفن همراه',
//             logout: 'خروج',
//         }
//     },
//     ra: {
//         action: {
//             add_filter: "",
//             add: "",
//             back: "",
//             bulk_actions: "",
//             cancel: "",
//             clear_input_value: "",
//             clone: "",
//             confirm: "",
//             create: "",
//             create_item: "",
//             delete: "",
//             edit: "",
//             export: "",
//             list: "",
//             refresh: "",
//             remove_filter: "",
//             remove: "",
//             save: "",
//             search: "",
//             select_all: "",
//             select_row: "",
//             show: "",
//             sort: "",
//             undo: "",
//             unselect: "",
//             expand: "",
//             close: "",
//             open_menu: "",
//             close_menu: "",
//             update: "",
//             move_up: "",
//             move_down: ""
//         },
//         boolean: {
//             true: "",
//             false: "",
//             null: ""
//         },
//         page: {
//             create: "",
//             dashboard: "",
//             edit: "",
//             error: "",
//             list: "",
//             loading: "",
//             not_found: "",
//             show: "",
//             empty: "",
//             invite: ""
//         },
//         input: {
//             file: {
//                 upload_several: "",
//                 upload_single: ""
//             },
//             image: {
//                 upload_several: "",
//                 upload_single: ""
//             },
//             references: {
//                 all_missing: "",
//                 many_missing: "",
//                 single_missing: ""
//             },
//             password: {
//                 toggle_visible: "",
//                 toggle_hidden: ""
//             }
//         },
//         message: {
//             about: "",
//             are_you_sure: "",
//             bulk_delete_content: "",
//             bulk_delete_title: "",
//             bulk_update_content: "",
//             bulk_update_title: "",
//             delete_content: "",
//             delete_title: "",
//             details: "",
//             error: "",
//             invalid_form: "",
//             loading: "",
//             no: "",
//             not_found: "",
//             yes: "",
//             unsaved_changes: ""
//         },
//         navigation: {
//             no_results: "",
//             no_more_results: "",
//             page_out_of_boundaries: "",
//             page_out_from_end: "",
//             page_out_from_begin: "",
//             page_range_info: "",
//             page_rows_per_page: "",
//             next: "",
//             prev: "",
//             skip_nav: ""
//         },
//         sort: {
//             sort_by: "",
//             ASC: "",
//             DESC: ""
//         },
//         auth: {
//             auth_check_error: "",
//             user_menu: "",
//             username: "",
//             password: "",
//             sign_in: "",
//             sign_in_error: "",
//             logout: ""
//         },
//         notification: {
//             updated: "",
//             created: "",
//             deleted: "",
//             bad_item: "",
//             item_doesnt_exist: "",
//             http_error: "",
//             data_provider_error: "",
//             i18n_error: "",
//             canceled: "",
//             logged_out: "",
//             not_authorized: ""
//         },
//         validation: {
//             required: "",
//             minLength: "",
//             maxLength: "",
//             minValue: "",
//             maxValue: "",
//             number: "",
//             email: "",
//             oneOf: "",
//             regex: ""
//         }
//     }
// }




// import { TranslationMessages } from 'ra-core';

const farsiMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'اضافه‌کردن فیلتر',
            add: 'اضافه',
            back: 'بازگشت',
            bulk_actions: '۱ آیتم انتخاب شد |||| %{smart_count} عدد از آیتم‌ها انتخاب شدند',
            cancel: 'انصراف',
            clear_input_value: 'پاک‌کردن مقدار',
            clone: 'شبیه‌سازی',
            confirm: 'تایید',
            create: 'ایجاد',
            delete: 'حذف',
            edit: 'ویرایش',
            export: 'دریافت خروجی',
            list: 'لیست',
            refresh: 'بروز‌رسانی',
            remove_filter: 'حذف این فیلتر',
            remove: 'حذف',
            save: 'ذخیره',
            search: 'جست‌وجو',
            show: 'نمایش',
            sort: 'مرتب‌سازی',
            undo: 'لغو',
            unselect: 'عدم انتخاب',
            expand: 'باز کن',
            close: 'ببند',
            close_menu: 'بستن منو',
            open_menu: 'باز کردن منو',
        },
        boolean: {
            true: 'بله',
            false: 'خیر',
            null: '',
        },
        page: {
            create: 'ایجاد %{name}',
            dashboard: 'داشبورد',
            edit: '%{name} #%{id}',
            error: 'مشکلی ایجاد شد',
            list: 'لیست %{name}',
            loading: 'در حال بارگزاری',
            not_found: 'پیدا نشد',
            show: '%{name} #%{id}',
            empty: 'هنوز سطری از %{name} وجود ندارد.',
            invite: 'آیا میخواهید یک مورد اضافه کنید؟',
        },
        input: {
            file: {
                upload_several: 'تعدادی فایل برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
                upload_single: 'فایلی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
            },
            image: {
                upload_several: 'تعدادی عکس برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
                upload_single: 'عکسی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
            },
            references: {
                all_missing: 'امکان پیدا کردن اطلاعات ارجاعی وجود ندارد.',
                many_missing: 'حداقل یکی از مراجع در دسترس نیست.',
                single_missing: 'مرجع مورد نظر در دسترس نیست.',
            },
            password: {
                toggle_visible: 'پنهان کردن رمز عبور',
                toggle_hidden: 'نمایش رمز عبور',
            },
        },
        message: {
            about: 'درباره',
            are_you_sure: 'آیا اطمینان دارید ؟',
            bulk_delete_content:
                'آیا از حذف  %{name} اطمینان دارید؟ |||| آیا از حدف %{smart_count} عدد از آیتم‌ها اطمینان دارید؟',
            bulk_delete_title: 'حذف %{name} |||| حذف %{smart_count} عدد از آیتم‌های %{name}',
            delete_content: 'آیا از حذف این آیتم اطمینان دارید؟',
            delete_title: 'حذف %{name} #%{id}',
            details: 'جزییات',
            error: "خطایی در مرورگر رخ داد. درخواست شما کامل نشد",
            invalid_form: 'فرم درست پر نشده است. لطفا خطاها را بررسی کنید',
            loading: 'صفحه در حال بارگزاری است، چند لحظه صبر کنید',
            no: 'خیر',
            not_found: 'شما یک نشانی اینترنتی اشتباه تایپ کردید یا پیغام بدی را دنبال کردید.',
            yes: 'بله',
            unsaved_changes: 'تغییرات شما ذخیره نشده اند. آیا مطمئن هستید که می خواهید از آنها چشم پوشی کنید؟',
        },
        navigation: {
            no_results: 'نتیجه‌ای پیدا نشد',
            no_more_results: 'شماره صفحه‌ی %{page} خارج از محدوده مجاز است. صفحه قبل را امتحان کنید.',
            page_out_of_boundaries: 'شماره صفحه %{page} خارج از محدوده است',
            page_out_from_end: 'نمی‌توان به بعد از صفحه آخر رفت',
            page_out_from_begin: 'نمی‌توان به قبل از صفحه اول رفت',
            page_range_info: '%{offsetBegin}-%{offsetEnd} (کل: %{total})',
            page_rows_per_page: 'تعداد ردیف‌ها در صفحه:',
            next: 'بعدی',
            prev: 'قبلی',
            skip_nav: 'رفتن به محتوا'
        },
        sort: {
            sort_by: 'مرتب‌سازی بر اساس %{field} %{order}',
            ASC: 'صعودی',
            DESC: 'نزولی',
        },
        auth: {
            auth_check_error: 'لطفا برای ادامه وارد شوید',
            user_menu: 'پروفایل',
            username: 'نام‌کاربری',
            password: 'رمز عبور',
            phone_number: 'شماره تلفن همراه',
            sign_in: 'ورود',
            log_in: 'ورود',
            sign_in_error: 'شناسایی با شکست مواجه شد، دوباره تلاش کنید',
            logout: 'خروج',
        },
        notification: {
            i18n_error: 'بارگزاری ترجمه‌ها برای زبان مورد نظر امکان‌پذیر نیست',
            updated: 'المان بروز‌رسانی شد',
            created: 'المان ایجاد شد',
            deleted: 'المان حذف شد',
            bad_item: 'المان اشتباه',
            item_doesnt_exist: 'المان پیدا نشد',
            http_error: 'خطا در برقراری ارتباط با سرور',
            data_provider_error: 'خطا در دریافت اطلاعات',
            canceled: 'لغو شد',
            logged_out: 'نشست کاربری شما به پایان زسیده‌است، لطفا دوباره وصل شوید.',
            not_authorized: ''
        },
        validation: {
            required: 'اجباری',
            minLength: 'حداقل باید %{min} کارکتر باشد',
            maxLength: 'باید %{max} کارکتر یا کمتر باشد',
            minValue: 'حداقل باید %{min} باشد',
            maxValue: 'باید %{max} یا کمتر باشد',
            number: 'باید یک عدد باشد',
            email: 'باید یک آدرس ایمیل صحیح باشد',
            oneOf: 'باید انتخابی از این گزینه‌ها باشد: %{options}',
            regex: 'باید با فرمت خاصی هماهنگ باشد (regexp): %{pattern}',
        },
    },
    ir: {
        auth: {
            auth_check_error: 'لطفا برای ادامه وارد شوید',
            user_menu: 'پروفایل',
            username: 'نام‌کاربری',
            password: 'رمز عبور',
            phone_number: 'شماره تلفن همراه',
            sign_in: 'ورود',
            log_in: 'ورود',
            sign_in_error: 'شناسایی با شکست مواجه شد، دوباره تلاش کنید',
            logout: 'خروج',
        },
        validation: {
            required: 'تکمیل این قسمت الزامی است.',
            minLength: 'حداقل باید %{min} کارکتر باشد',
            maxLength: 'باید %{max} کارکتر یا کمتر باشد',
            minValue: 'حداقل باید %{min} باشد',
            maxValue: 'باید %{max} یا کمتر باشد',
            number: 'باید یک عدد باشد',
            email: 'باید یک آدرس ایمیل صحیح باشد',
            oneOf: 'باید انتخابی از این گزینه‌ها باشد: %{options}',
            regex: 'باید با فرمت خاصی هماهنگ باشد (regexp): %{pattern}',
            wrong_phone_format: 'فرمت شماره تلفن واردشده صحیح نمی باشد!',
        },
        labels: {
            users: 'کاربران',
            posts: 'پست ها',
        }
    }
};

export default farsiMessages;