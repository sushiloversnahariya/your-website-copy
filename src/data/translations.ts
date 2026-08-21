export type Lang = "ru" | "uk" | "he" | "en";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "he", label: "עברית", flag: "🇮🇱" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export const TRANSLATIONS: Record<string, Record<Lang, string>> = {
  "nav_menu": {
    "ru": "Меню",
    "uk": "Меню",
    "he": "תפריט",
    "en": "Menu"
  },
  "nav_reviews": {
    "ru": "Отзывы",
    "uk": "Відгуки",
    "he": "ביקורות",
    "en": "Reviews"
  },
  "nav_gallery": {
    "ru": "Галерея",
    "uk": "Галерея",
    "he": "גלריה",
    "en": "Gallery"
  },
  "nav_contacts": {
    "ru": "Контакты",
    "uk": "Контакти",
    "he": "צור קשר",
    "en": "Contact"
  },
  "menu_all": {
    "ru": "Все",
    "uk": "Усе",
    "he": "הכל",
    "en": "All"
  },
  "menu_heading": {
    "ru": "Наше меню",
    "uk": "Наше меню",
    "he": "התפריט שלנו",
    "en": "Our Menu"
  },
  "menu_loading_title": {
    "ru": "Меню скоро появится",
    "uk": "Меню скоро з'явиться",
    "he": "התפריט יופיע בקרוב",
    "en": "Menu is loading soon"
  },
  "menu_loading_body": {
    "ru": "Обновите страницу или напишите нам, чтобы оформить заказ.",
    "uk": "Оновіть сторінку або напишіть нам, щоб оформити замовлення.",
    "he": "רעננו את העמוד או כתבו לנו כדי לבצע הזמנה.",
    "en": "Refresh the page or message us to place an order."
  },
  "menu_notice_images": {
    "ru": "Фотографии представлены только для иллюстрации.",
    "uk": "Фотографії наведені лише для ілюстрації.",
    "he": "התמונות להמחשה בלבד.",
    "en": "Images are for illustrative purposes only."
  },
  "menu_notice_allergy": {
    "ru": "Информация об аллергенах",
    "uk": "Інформація про алергени",
    "he": "מידע על אלרגנים",
    "en": "Allergy Information"
  },
  "allergy_intro": {
    "ru": "Наши блюда могут содержать или контактировать с аллергенами. Если у вас есть аллергия или чувствительность, сообщите нам перед заказом.",
    "uk": "Наші страви можуть містити або контактувати з алергенами. Якщо у вас є алергія або чутливість, повідомте нам перед замовленням.",
    "he": "המנות שלנו עלולות להכיל או לבוא במגע עם אלרגנים. אם יש לכם אלרגיה או רגישות, נא לעדכן אותנו לפני ההזמנה.",
    "en": "Our dishes may contain or come into contact with allergens. If you have an allergy or sensitivity, please tell us before ordering."
  },
  "allergy_list": {
    "ru": "Возможные аллергены: рыба, морепродукты, ракообразные, моллюски, яйца, молоко, сливочный сыр, кунжут, соя, пшеница/глютен, орехи, миндаль, арахис, васаби, острые соусы и другие ингредиенты.",
    "uk": "Можливі алергени: риба, морепродукти, ракоподібні, молюски, яйця, молоко, вершковий сир, кунжут, соя, пшениця/глютен, горіхи, мигдаль, арахіс, васабі, гострі соуси та інші інгредієнти.",
    "he": "אלרגנים אפשריים: דגים, פירות ים, סרטנים, רכיכות, ביצים, חלב, גבינת שמנת, שומשום, סויה, חיטה/גלוטן, אגוזים, שקדים, בוטנים, ווסאבי, רטבים חריפים ומרכיבים נוספים.",
    "en": "Possible allergens: fish, seafood, crustaceans, shellfish, eggs, milk, cream cheese, sesame, soy, wheat/gluten, tree nuts, almonds, peanuts, wasabi, spicy sauces, and other ingredients."
  },
  "allergy_confirm": {
    "ru": "Понятно",
    "uk": "Зрозуміло",
    "he": "הבנתי",
    "en": "I understand"
  },
  "pieces_short": {
    "ru": "шт.",
    "uk": "шт.",
    "he": "יח׳",
    "en": "pcs"
  },
  "grams_short": {
    "ru": "гр",
    "uk": "г",
    "he": "גרם",
    "en": "gr"
  },
  "temporarily_out_of_stock": {
    "ru": "Временно нет в наличии",
    "uk": "Тимчасово немає в наявності",
    "he": "אזל זמנית מהמלאי",
    "en": "Temporarily out of stock"
  },
  "vacation_notice_title": {
    "ru": "Мы в отпуске",
    "uk": "Ми у відпустці",
    "he": "אנחנו בחופשה",
    "en": "We're on vacation"
  },
  "vacation_notice_body": {
    "ru": "С 31.07 по 10.08.2026 мы отдыхаем. Приём заказов возобновится с 11.08.2026 — уже можно оформить заказ на эту дату и позже.",
    "uk": "З 31.07 по 10.08.2026 ми відпочиваємо. Приймання замовлень відновиться з 11.08.2026 — вже можна оформити замовлення на цю дату й пізніше.",
    "he": "בין 31.07 ל-10.08.2026 אנחנו בחופשה. קבלת ההזמנות תתחדש מ-11.08.2026 — כבר אפשר להזמין לתאריך הזה ואילך.",
    "en": "We're away from 31.07 to 10.08.2026. Ordering reopens from 11.08.2026 — you can already place an order for that date or later."
  },
  "hero_badge": {
    "ru": "Нагария · с 2021",
    "uk": "Нагарія · з 2021",
    "he": "נהריה · מאז 2021",
    "en": "Nahariya · since 2021"
  },
  "hero_title": {
    "ru": "Любители Суши?!",
    "uk": "Любителі Суші?!",
    "he": "אוהבי סושי?!",
    "en": "Sushi Lovers?!"
  },
  "hero_subtitle": {
    "ru": "Добро пожаловать",
    "uk": "Ласкаво просимо",
    "he": "ברוכים הבאים",
    "en": "Welcome"
  },
  "hero_tag_fresh": {
    "ru": "🥢 Свежие ингредиенты",
    "uk": "🥢 Свіжі інгредієнти",
    "he": "🥢 מרכיבים טריים",
    "en": "🥢 Fresh ingredients"
  },
  "hero_tag_delivery": {
    "ru": "🚗 Доставка по округу",
    "uk": "🚗 Доставка по округу",
    "he": "🚗 משלוחים באזור",
    "en": "🚗 Local delivery"
  },
  "hero_tag_wa": {
    "ru": "💬 Заказ онлайн",
    "uk": "💬 Замовлення онлайн",
    "he": "💬 הזמנה אונליין",
    "en": "💬 Order online"
  },
  "hero_cta": {
    "ru": "Смотреть меню",
    "uk": "Дивитися меню",
    "he": "לתפריט",
    "en": "View menu"
  },
  "add_to_cart": {
    "ru": "В корзину",
    "uk": "У кошик",
    "he": "להוסיף",
    "en": "Add to cart"
  },
  "added": {
    "ru": "Добавлено",
    "uk": "Додано",
    "he": "נוסף",
    "en": "Added"
  },
  "cart": {
    "ru": "Корзина",
    "uk": "Кошик",
    "he": "סל",
    "en": "Cart"
  },
  "cart_empty": {
    "ru": "Корзина пуста",
    "uk": "Кошик порожній",
    "he": "הסל ריק",
    "en": "Your cart is empty"
  },
  "cart_empty_hint": {
    "ru": "Добавьте что-нибудь из меню",
    "uk": "Додайте щось з меню",
    "he": "הוסיפו מנות מהתפריט",
    "en": "Add something from the menu"
  },
  "extras_title": {
    "ru": "Соусы и приборы",
    "uk": "Соуси та прибори",
    "he": "רטבים וכלים",
    "en": "Sauces & chopsticks"
  },
  "extras_hint": {
    "ru": "Палочки бесплатно, каждый соус — 1₪",
    "uk": "Палички безкоштовно, кожен соус — 1₪",
    "he": "מקלות אכילה ללא תשלום, כל רוטב ב-1₪",
    "en": "Chopsticks are free; each sauce is 1₪"
  },
  "extras_label": {
    "ru": "Дополнительно",
    "uk": "Додатково",
    "he": "תוספות",
    "en": "Extras"
  },
  "extras_reminder_title": {
    "ru": "Добавить палочки или соусы?",
    "uk": "Додати палички або соуси?",
    "he": "להוסיף מקלות או רטבים?",
    "en": "Add chopsticks or sauces?"
  },
  "extras_reminder_text": {
    "ru": "Вы не выбрали палочки или соусы. Можно вернуться в корзину и добавить их, либо продолжить без дополнений.",
    "uk": "Ви не вибрали палички або соуси. Можна повернутися в кошик і додати їх або продовжити без додатків.",
    "he": "לא נבחרו מקלות או רטבים. אפשר לחזור לעגלה ולהוסיף אותם, או להמשיך בלי תוספות.",
    "en": "You did not choose chopsticks or sauces. You can go back to the cart to add them, or continue without extras."
  },
  "add_extras": {
    "ru": "Добавить",
    "uk": "Додати",
    "he": "להוסיף",
    "en": "Add extras"
  },
  "continue_without_extras": {
    "ru": "Продолжить без них",
    "uk": "Продовжити без них",
    "he": "להמשיך בלי",
    "en": "Continue without"
  },
  "min_order_food_only": {
    "ru": "Минимальная сумма считается только по блюдам; палочки и соусы не входят в минимум.",
    "uk": "Мінімальна сума рахується тільки за стравами; палички та соуси не входять у мінімум.",
    "he": "מינימום הזמנה מחושב לפי מנות בלבד; מקלות ורטבים לא נכללים במינימום.",
    "en": "Minimum order is counted from food items only; chopsticks and sauces do not count toward it."
  },
  "extra_sticks": {
    "ru": "Палочки",
    "uk": "Палички",
    "he": "מקלות אכילה",
    "en": "Chopsticks"
  },
  "extra_soy": {
    "ru": "Соевый соус",
    "uk": "Соєвий соус",
    "he": "רוטב סויה",
    "en": "Soy sauce"
  },
  "extra_teriyaki": {
    "ru": "Соус терияки",
    "uk": "Соус теріякі",
    "he": "רוטב טריאקי",
    "en": "Teriyaki sauce"
  },
  "extra_spicy": {
    "ru": "Острый майонез",
    "uk": "Гострий майонез",
    "he": "מיונז חריף",
    "en": "Spicy mayonnaise"
  },
  "extra_wasabi": {
    "ru": "Васаби",
    "uk": "Васабі",
    "he": "וואסאבי",
    "en": "Wasabi"
  },
  "extra_ginger": {
    "ru": "Имбирь",
    "uk": "Імбир",
    "he": "ג׳ינג׳ר",
    "en": "Ginger"
  },
  "included": {
    "ru": "Бесплатно",
    "uk": "Безкоштовно",
    "he": "כלול",
    "en": "Included"
  },
  "subtotal": {
    "ru": "Сумма",
    "uk": "Сума",
    "he": "סה״כ",
    "en": "Subtotal"
  },
  "delivery_fee": {
    "ru": "Доставка",
    "uk": "Доставка",
    "he": "משלוח",
    "en": "Delivery fee"
  },
  "total": {
    "ru": "Итого",
    "uk": "Разом",
    "he": "סה״כ לתשלום",
    "en": "Total"
  },
  "checkout": {
    "ru": "Оформить заказ",
    "uk": "Оформити замовлення",
    "he": "להזמין",
    "en": "Checkout"
  },
  "remove": {
    "ru": "Убрать",
    "uk": "Прибрати",
    "he": "הסר",
    "en": "Remove"
  },
  "your_order": {
    "ru": "Ваш заказ",
    "uk": "Ваше замовлення",
    "he": "ההזמנה שלכם",
    "en": "Your order"
  },
  "name": {
    "ru": "Имя",
    "uk": "Імʼя",
    "he": "שם",
    "en": "Name"
  },
  "phone": {
    "ru": "Телефон",
    "uk": "Телефон",
    "he": "טלפון",
    "en": "Phone"
  },
  "phone_hint": {
    "ru": "Израильский мобильный номер: 05X-XXX-XXXX",
    "uk": "Ізраїльський мобільний номер: 05X-XXX-XXXX",
    "he": "מספר נייד ישראלי: 05X-XXX-XXXX",
    "en": "Israeli mobile number: 05X-XXX-XXXX"
  },
  "phone_invalid": {
    "ru": "Введите корректный израильский мобильный номер из 10 цифр",
    "uk": "Введіть правильний ізраїльський мобільний номер із 10 цифр",
    "he": "יש להזין מספר נייד ישראלי תקין בן 10 ספרות",
    "en": "Enter a valid 10-digit Israeli mobile number"
  },
  "address": {
    "ru": "Адрес доставки",
    "uk": "Адреса доставки",
    "he": "כתובת למשלוח",
    "en": "Delivery address"
  },
  "order_date": {
    "ru": "Дата заказа",
    "uk": "Дата замовлення",
    "he": "תאריך ההזמנה",
    "en": "Order date"
  },
  "order_date_hint": {
    "ru": "Выберите день, на который нужен заказ.",
    "uk": "Оберіть день, на який потрібне замовлення.",
    "he": "בחרו את היום שבו תרצו לקבל את ההזמנה.",
    "en": "Choose the day you want the order for."
  },
  "order_date_invalid": {
    "ru": "Выберите сегодняшнюю или будущую дату",
    "uk": "Оберіть сьогоднішню або майбутню дату",
    "he": "בחרו תאריך מהיום והלאה",
    "en": "Choose today or a future date"
  },
  "order_time_preference": {
    "ru": "Желаемое время",
    "uk": "Бажаний час",
    "he": "זמן מועדף",
    "en": "Preferred time"
  },
  "order_time_hint": {
    "ru": "Это пожелание. Точное время мы подтвердим в WhatsApp.",
    "uk": "Це побажання. Точний час ми підтвердимо у WhatsApp.",
    "he": "זו בקשה בלבד. נאשר את הזמן המדויק ב-WhatsApp.",
    "en": "This is a preference. We will confirm the exact time in WhatsApp."
  },
  "pickup": {
    "ru": "Самовывоз",
    "uk": "Самовивіз",
    "he": "איסוף עצמי",
    "en": "Pickup"
  },
  "delivery": {
    "ru": "Доставка",
    "uk": "Доставка",
    "he": "משלוח",
    "en": "Delivery"
  },
  "city": {
    "ru": "Город",
    "uk": "Місто",
    "he": "עיר",
    "en": "City"
  },
  "city_nahariya": {
    "ru": "Нагария",
    "uk": "Нагарія",
    "he": "נהריה",
    "en": "Nahariya"
  },
  "city_akko": {
    "ru": "Акко",
    "uk": "Акко",
    "he": "עכו",
    "en": "Akko"
  },
  "city_maalot": {
    "ru": "Маалот",
    "uk": "Маалот",
    "he": "מעלות",
    "en": "Maalot"
  },
  "payment": {
    "ru": "Способ оплаты",
    "uk": "Спосіб оплати",
    "he": "אמצעי תשלום",
    "en": "Payment method"
  },
  "payment_bit": {
    "ru": "Bit",
    "uk": "Bit",
    "he": "ביט",
    "en": "Bit"
  },
  "payment_paybox": {
    "ru": "PayBox",
    "uk": "PayBox",
    "he": "פייבוקס",
    "en": "PayBox"
  },
  "payment_cash": {
    "ru": "Наличные",
    "uk": "Готівка",
    "he": "מזומן",
    "en": "Cash"
  },
  "notes": {
    "ru": "Комментарий",
    "uk": "Коментар",
    "he": "הערות",
    "en": "Notes"
  },
  "place_order_wa": {
    "ru": "Сохранить и открыть WhatsApp",
    "uk": "Зберегти й відкрити WhatsApp",
    "he": "שמירה ופתיחה ב-WhatsApp",
    "en": "Save and open WhatsApp"
  },
  "whatsapp_required": {
    "ru": "После сохранения откроется WhatsApp с готовым заказом. Нажмите «Отправить», чтобы мы сразу его увидели.",
    "uk": "Після збереження відкриється WhatsApp із готовим замовленням. Натисніть «Надіслати», щоб ми одразу його побачили.",
    "he": "לאחר השמירה WhatsApp ייפתח עם ההזמנה המוכנה. לחצו על שליחה כדי שנראה אותה מיד.",
    "en": "After saving, WhatsApp opens with your prepared order. Tap Send so we receive it immediately."
  },
  "order_timing_notice": {
    "ru": "Точное время готовности или доставки мы подтвердим в WhatsApp после проверки заказа.",
    "uk": "Точний час готовності або доставки ми підтвердимо у WhatsApp після перевірки замовлення.",
    "he": "נאשר ב-WhatsApp את זמן ההכנה או המשלוח המדויק לאחר בדיקת ההזמנה.",
    "en": "We will confirm the exact ready or delivery time in WhatsApp after reviewing the order."
  },
  "gallery_title": {
    "ru": "Галерея",
    "uk": "Галерея",
    "he": "גלריה",
    "en": "Gallery"
  },
  "reviews_title": {
    "ru": "Отзывы",
    "uk": "Відгуки",
    "he": "ביקורות",
    "en": "Reviews"
  },
  "reviews_rating": {
    "ru": "Google отзывов",
    "uk": "відгуків у Google",
    "he": "ביקורות Google",
    "en": "Google reviews"
  },
  "google_review": {
    "ru": "Отзыв Google",
    "uk": "Відгук Google",
    "he": "ביקורת Google",
    "en": "Google review"
  },
  "all_reviews_google": {
    "ru": "Все отзывы в Google",
    "uk": "Усі відгуки в Google",
    "he": "כל הביקורות ב-Google",
    "en": "All reviews on Google"
  },
  "read_more": {
    "ru": "Читать дальше",
    "uk": "Читати далі",
    "he": "קרא עוד",
    "en": "Read more"
  },
  "show_less": {
    "ru": "Свернуть",
    "uk": "Згорнути",
    "he": "הצג פחות",
    "en": "Show less"
  },
  "contacts_title": {
    "ru": "Контакты",
    "uk": "Контакти",
    "he": "צור קשר",
    "en": "Contact"
  },
  "contacts_phone": {
    "ru": "Телефон",
    "uk": "Телефон",
    "he": "טלפון",
    "en": "Phone"
  },
  "contacts_address": {
    "ru": "Адрес",
    "uk": "Адреса",
    "he": "כתובת",
    "en": "Address"
  },
  "contacts_email": {
    "ru": "Email",
    "uk": "Email",
    "he": "אימייל",
    "en": "Email"
  },
  "address_value": {
    "ru": "Нагария, Мааган 9",
    "uk": "Нагарія, Мааґан 9",
    "he": "נהריה, מעגן 9",
    "en": "Nahariya, Maagan 9"
  },
  "footer_rights": {
    "ru": "Все права защищены",
    "uk": "Усі права захищені",
    "he": "כל הזכויות שמורות",
    "en": "All rights reserved"
  },
  "footer_location": {
    "ru": "Нагария",
    "uk": "Нагарія",
    "he": "נהריה",
    "en": "Nahariya"
  },
  "accessibility_statement_link": {
    "ru": "Заявление о доступности",
    "uk": "Заява про доступність",
    "he": "הצהרת נגישות",
    "en": "Accessibility statement"
  },
  "qty": {
    "ru": "Кол-во",
    "uk": "К-сть",
    "he": "כמות",
    "en": "Qty"
  },
  "view_review": {
    "ru": "Оставить отзыв в Google",
    "uk": "Залишити відгук у Google",
    "he": "כתוב ביקורת ב-Google",
    "en": "Leave a Google review"
  },
  "skip_content": {
    "ru": "Перейти к основному содержанию",
    "uk": "Перейти до основного вмісту",
    "he": "דילוג לתוכן הראשי",
    "en": "Skip to main content"
  },
  "hours_label": {
    "ru": "Часы работы",
    "uk": "Години роботи",
    "he": "שעות פתיחה",
    "en": "Opening hours"
  },
  "hours_value": {
    "ru": "Вс–Пт 10:00–19:00 · Сб 14:00–19:00",
    "uk": "Нд–Пт 10:00–19:00 · Сб 14:00–19:00",
    "he": "א׳–ו׳ 10:00–19:00 · שבת 14:00–19:00",
    "en": "Sun-Fri 10:00–19:00 · Sat 14:00–19:00"
  },
  "open_now": {
    "ru": "Открыто",
    "uk": "Відчинено",
    "he": "פתוח",
    "en": "Open now"
  },
  "closed_now": {
    "ru": "Закрыто",
    "uk": "Зачинено",
    "he": "סגור",
    "en": "Closed"
  },
  "min_order": {
    "ru": "Минимальный заказ",
    "uk": "Мінімальне замовлення",
    "he": "הזמנה מינימלית",
    "en": "Minimum order"
  },
  "min_order_error": {
    "ru": "Минимальная сумма заказа не достигнута",
    "uk": "Не досягнуто мінімальної суми замовлення",
    "he": "סכום ההזמנה המינימלי לא הושג",
    "en": "Minimum order amount not reached"
  },
  "sets_no_changes": {
    "ru": "Роллы в сетах без изменений.",
    "uk": "Роли в сетах без змін.",
    "he": "הרולים בסטים מגיעים ללא שינויים.",
    "en": "Rolls in sets are served without changes."
  },
  "order_confidence": {
    "ru": "Мы подтверждаем каждый заказ в WhatsApp перед приготовлением.",
    "uk": "Ми підтверджуємо кожне замовлення у WhatsApp перед приготуванням.",
    "he": "אנחנו מאשרים כל הזמנה ב-WhatsApp לפני ההכנה.",
    "en": "We confirm every order in WhatsApp before preparing it."
  },
  "order_type_section": {
    "ru": "Тип заказа",
    "uk": "Тип замовлення",
    "he": "סוג הזמנה",
    "en": "Order type"
  },
  "customer_details_section": {
    "ru": "Данные клиента",
    "uk": "Дані клієнта",
    "he": "פרטי לקוח",
    "en": "Customer details"
  },
  "checkout_privacy_note": {
    "ru": "Используется только для подготовки вашего заказа и никому не передаётся.",
    "uk": "Використовується лише для підготовки вашого замовлення і нікому не передається.",
    "he": "משמש רק להכנת ההזמנה שלכם ולא מועבר לאף גורם.",
    "en": "Used only to prepare your order — never shared with anyone."
  },
  "schedule_section": {
    "ru": "Дата и время",
    "uk": "Дата і час",
    "he": "תאריך ושעה",
    "en": "Date and time"
  },
  "payment_section": {
    "ru": "Оплата и примечания",
    "uk": "Оплата й примітки",
    "he": "תשלום והערות",
    "en": "Payment and notes"
  },
  "repeat_last_order": {
    "ru": "Повторить прошлый заказ",
    "uk": "Повторити минуле замовлення",
    "he": "חזרה על ההזמנה האחרונה",
    "en": "Repeat last order"
  },
  "last_order_hint": {
    "ru": "Быстро восстановить последнюю корзину на этом устройстве.",
    "uk": "Швидко відновити останній кошик на цьому пристрої.",
    "he": "שחזור מהיר של הסל האחרון במכשיר הזה.",
    "en": "Quickly restore the last cart on this device."
  },
  "whatsapp_send_reminder": {
    "ru": "WhatsApp откроется с готовым текстом. Нажмите отправить, чтобы мы получили заказ.",
    "uk": "WhatsApp відкриється з готовим текстом. Натисніть надіслати, щоб ми отримали замовлення.",
    "he": "WhatsApp ייפתח עם טקסט מוכן. לחצו שליחה כדי שנקבל את ההזמנה.",
    "en": "WhatsApp will open with the prepared text. Tap send so we receive the order."
  },
  "details": {
    "ru": "Подробнее",
    "uk": "Детальніше",
    "he": "פרטים",
    "en": "Details"
  },
  "filter_favorites": {
    "ru": "Избранное",
    "uk": "Улюблене",
    "he": "מועדפים",
    "en": "Favorites"
  },
  "trust_title": {
    "ru": "Доверие и доступность",
    "uk": "Довіра та доступність",
    "he": "אמון ונגישות",
    "en": "Trust & accessibility"
  },
  "trust_subtitle": {
    "ru": "Понятный заказ, приватность и доступность.",
    "uk": "Зрозуміле замовлення, приватність і доступність.",
    "he": "הזמנה ברורה, פרטיות ונגישות.",
    "en": "Clear ordering, privacy and access."
  },
  "trust_body_1": {
    "ru": "Данные клиента используются только для подготовки и подтверждения заказа в WhatsApp. Сохранённые данные оформления остаются на этом устройстве, пока вы не очистите браузер.",
    "uk": "Дані клієнта використовуються лише для підготовки й підтвердження замовлення у WhatsApp. Збережені дані оформлення залишаються на цьому пристрої, поки ви не очистите браузер.",
    "he": "פרטי הלקוח משמשים רק להכנה ואישור ההזמנה ב-WhatsApp. פרטי הזמנה שנשמרו נשארים במכשיר הזה כל עוד לא מנקים את הדפדפן.",
    "en": "Customer details are used only to prepare and confirm the WhatsApp order. Saved checkout details stay on this device unless the browser is cleared."
  },
  "trust_body_2": {
    "ru": "Если нужно срочно что-то изменить после отправки заказа, позвоните или напишите нам напрямую через кнопки контактов.",
    "uk": "Якщо потрібно терміново щось змінити після надсилання замовлення, зателефонуйте або напишіть нам напряму через кнопки контактів.",
    "he": "לשינויים דחופים אחרי שליחת ההזמנה, אנא התקשרו או כתבו לנו ישירות דרך כפתורי יצירת הקשר.",
    "en": "For urgent changes after sending an order, call or message us directly through the contact buttons."
  },
  "install_title": {
    "ru": "Установить Sushi Lovers",
    "uk": "Встановити Sushi Lovers",
    "he": "התקנת Sushi Lovers",
    "en": "Install Sushi Lovers"
  },
  "install_subtitle": {
    "ru": "Открывайте сайт быстрее с главного экрана.",
    "uk": "Відкривайте сайт швидше з головного екрана.",
    "he": "פתיחה מהירה יותר ממסך הבית.",
    "en": "Open faster from your home screen."
  },
  "install_later": {
    "ru": "Позже",
    "uk": "Пізніше",
    "he": "מאוחר יותר",
    "en": "Later"
  },
  "install_now": {
    "ru": "Установить",
    "uk": "Встановити",
    "he": "התקנה",
    "en": "Install"
  },
  "gallery_prev_photo": {
    "ru": "Предыдущее фото",
    "uk": "Попереднє фото",
    "he": "התמונה הקודמת",
    "en": "Previous photo"
  },
  "gallery_next_photo": {
    "ru": "Следующее фото",
    "uk": "Наступне фото",
    "he": "התמונה הבאה",
    "en": "Next photo"
  },
  "gallery_open_photo": {
    "ru": "Открыть фото",
    "uk": "Відкрити фото",
    "he": "פתיחת תמונה",
    "en": "Open photo"
  },
  "gallery_go_to_photo": {
    "ru": "Перейти к фото",
    "uk": "Перейти до фото",
    "he": "מעבר לתמונה",
    "en": "Go to photo"
  },
  "gallery_preview_photo": {
    "ru": "Миниатюра фото",
    "uk": "Мініатюра фото",
    "he": "תצוגה מקדימה של תמונה",
    "en": "Preview photo"
  },
  "reviews_curated_note": {
    "ru": "Несколько проверенных отзывов с Google — все отзывы смотрите на Google.",
    "uk": "Кілька перевірених відгуків з Google — усі відгуки дивіться на Google.",
    "he": "כמה ביקורות מאומתות מגוגל — את כל הביקורות אפשר לראות בגוגל.",
    "en": "A few verified reviews from Google — see all reviews on Google."
  },
  "badge_popular": {
    "ru": "Популярное",
    "uk": "Популярне",
    "he": "פופולרי",
    "en": "Popular"
  },
  "badge_new": {
    "ru": "Новинка",
    "uk": "Новинка",
    "he": "חדש",
    "en": "New"
  },
  "badge_chef": {
    "ru": "Выбор шефа",
    "uk": "Вибір шефа",
    "he": "בחירת השף",
    "en": "Chef's pick"
  },
  "field_required": {
    "ru": "Заполните это поле",
    "uk": "Заповніть це поле",
    "he": "יש למלא שדה זה",
    "en": "This field is required"
  },
  "favorite_add": {
    "ru": "Добавить в избранное",
    "uk": "Додати в улюблене",
    "he": "הוספה למועדפים",
    "en": "Add to favorites"
  },
  "favorite_remove": {
    "ru": "Убрать из избранного",
    "uk": "Прибрати з улюбленого",
    "he": "הסרה מהמועדפים",
    "en": "Remove from favorites"
  },
  "view_on_map": {
    "ru": "Открыть карту",
    "uk": "Відкрити карту",
    "he": "פתיחת מפה",
    "en": "View on map"
  },
  "copied_to_clipboard": {
    "ru": "Скопировано",
    "uk": "Скопійовано",
    "he": "הועתק",
    "en": "Copied to clipboard"
  },
  "wa_today_order_tag": {
    "ru": "ЗАКАЗ НА СЕГОДНЯ",
    "uk": "ЗАМОВЛЕННЯ НА СЬОГОДНІ",
    "he": "הזמנה להיום",
    "en": "TODAY'S ORDER"
  },
  "wa_future_order_tag": {
    "ru": "ЗАКАЗ НА БУДУЩЕЕ",
    "uk": "ЗАМОВЛЕННЯ НА МАЙБУТНЄ",
    "he": "הזמנה לעתיד",
    "en": "FUTURE ORDER"
  },
  "cart_unavailable_warning": {
    "ru": "В корзине есть товар, которого сейчас нет в наличии. Уберите его, чтобы оформить заказ.",
    "uk": "У кошику є товар, якого зараз немає в наявності. Приберіть його, щоб оформити замовлення.",
    "he": "בסל יש פריט שאינו זמין כרגע. הסירו אותו כדי להמשיך להזמנה.",
    "en": "Your cart has an item that's out of stock right now. Remove it to continue to checkout."
  },
  "review_irina": {
    "ru": "Без преувеличения самые вкусные суши🥰, которые я когда-либо пробовала, а в стране исхода я попробовала их не мало. Здесь же я как-то решила попробовать что-то новенькое, и это было не моё от слова совсем (зачем класть батат в суши я вообще не поняла, но это здесь довольно частая тема, как я поняла — это моё сугубо личное мнение). У Алины очень качественные ингредиенты, в роллах много рыбы, она свежайшая, рис просто идеален – он не сладкий, не хрустит на зубах и сами роллы не разваливаются. Есть очень необычные и потрясающие вкусовые сочетания, например такие как гребешок с трюфельной пастой и филадельфия с омлетом и манговым соусом. Ореховый соус для салата «Чукка» в исполнении Алины просто выше всяких похвал. Также хочу отметить приятную коммуникацию с ребятами, общение всегда на позитиве, доставка с улыбкой и ко времени, оформление заказа быстрое. Рекомендация от всего сердца, потому что мы с мужем довольно часто заказываем именно здесь! Потому что вкус, свежесть и хороший сервис я вижу только у них❤️👍🏻🤗. Жду когда ребята откроют ресторан🥰.",
    "uk": "Без перебільшення найсмачніші суші🥰, які я коли-небудь куштувала, а на батьківщині я їх спробувала чимало. Цього разу вирішила спробувати щось нове, і це було зовсім не моє (навіщо класти батат у суші, я взагалі не зрозуміла, але тут це, здається, доволі часта тема — це суто моя особиста думка). У Аліни дуже якісні інгредієнти, у ролах багато риби, вона найсвіжіша, рис просто ідеальний – не солодкий, не хрустить на зубах, і самі роли не розвалюються. Є дуже незвичні й приголомшливі смакові поєднання, наприклад, гребінець із трюфельною пастою або філадельфія з омлетом і манговим соусом. Горіховий соус для салату «Чука» у виконанні Аліни просто вище всіх похвал. Також хочу відзначити приємне спілкування з командою, завжди позитивне, доставка з усмішкою і вчасно, оформлення замовлення швидке. Рекомендую від щирого серця, бо ми з чоловіком доволі часто замовляємо саме тут! Бо смак, свіжість і гарний сервіс я бачу тільки в них❤️👍🏻🤗. Чекаю, коли хлопці відкриють ресторан🥰.",
    "he": "בלי הגזמה, הסושי הכי טעים🥰 שאכלתי בחיים, ובארץ המוצא שלי כבר טעמתי לא מעט. הפעם החלטתי לנסות משהו חדש וזה בכלל לא התאים לי (לא הבנתי בכלל למה שמים בטטה בסושי, אבל נראה שזה די נפוץ כאן - זו רק דעתי האישית). אצל אלינה יש מרכיבים איכותיים מאוד, ברולים הרבה דג, הכי טרי שיש, והאורז פשוט מושלם – לא מתוק, לא נדבק לשיניים, והרולים עצמם לא מתפרקים. יש שילובי טעמים מיוחדים ומדהימים, כמו סקאלופ עם משחת טראפל, או פילדלפיה עם חביתה ורוטב מנגו. רוטב האגוזים לסלט ה'צ'וקה' של אלינה פשוט מעל ומעבר לכל שבח. רוצה גם לציין את התקשורת הנעימה עם הצוות, תמיד חיוביים, משלוח עם חיוך ובזמן, וההזמנה מהירה. ממליצה בכל הלב, כי אני ובעלי מזמינים כאן די הרבה! כי טעם, טריות ושירות טוב כזה אני רואה רק אצלם❤️👍🏻🤗. מחכה שהם יפתחו מסעדה אמיתית🥰.",
    "en": "Without exaggeration, the tastiest sushi🥰 I've ever tried, and I've tried plenty back home. This time I decided to try something new, and it just wasn't for me (I honestly don't get putting sweet potato in sushi, but it seems to be a common thing here — just my personal opinion). Alina uses really high-quality ingredients, the rolls are packed with fish, always super fresh, and the rice is just perfect – not sweet, doesn't stick to your teeth, and the rolls don't fall apart. There are some amazing, unusual flavor combinations, like scallop with truffle paste, or Philadelphia with omelet and mango sauce. The walnut sauce for the \"Chuka\" salad is beyond praise. I also want to mention the lovely communication with the team, always friendly, delivery with a smile and right on time, and ordering is quick. Recommending with my whole heart, because my husband and I order here quite often! Because the taste, freshness and great service — I only see that here❤️👍🏻🤗. Can't wait for them to open an actual restaurant🥰."
  },
  "review_anastasiia": {
    "ru": "Огромнейшее спасибо за самые вкусные суши!!!! Порции - от души и до отвала....💞❤️ Все очень свежее! Разнообразие меню - на высоте! Заказы выполняются быстро и качественно! Цена - очень приятная! Отзывчивость хозяйки и внимание к деталям - на высоте! Вы - лучшие!!!",
    "uk": "Найщиріша подяка за найсмачніші суші!!!! Порції - від душі, аж занадто....💞❤️ Все дуже свіже! Різноманітність меню - на висоті! Замовлення виконуються швидко та якісно! Ціна - дуже приємна! Чуйність господині та увага до деталей - на висоті! Ви - найкращі!!!",
    "he": "תודה ענקית על הסושי הכי טעים!!!! המנות נדיבות, בשפע....💞❤️ הכל כל כך טרי! מגוון התפריט מעולה! ההזמנות מתבצעות מהר ובאיכות גבוהה! המחיר הוגן מאוד! האדיבות של הבעלים ותשומת הלב לפרטים ברמה הכי גבוהה! אתם הכי טובים!!!",
    "en": "A huge thank you for the tastiest sushi!!!! The portions are generous, more than enough....💞❤️ Everything is so fresh! The menu variety is top-notch! Orders are done fast and well! The price is very fair! The owner's responsiveness and attention to detail are outstanding! You're the best!!!"
  },
  "review_alexey": {
    "ru": "Очень вкусные роллы! Приятно удивлены. Особенно порадовал ролл особый гурмэ, очень необычный вкус, но очень приятный. Также хотелось бы отметить прекрасное обслуживание и очень приятную девушку, создающую уют и хорошее впечатление на месте, несмотря на то что мы в этот раз заказывали доставку. Продержались минут 40, что для суши в принципе неплохой результат. Рекомендую 100%!",
    "uk": "Дуже смачні роли! Приємно здивовані. Особливо порадував рол особливий гурме, дуже незвичний смак, але дуже приємний. Також хочу відзначити чудове обслуговування та дуже приємну дівчину, яка створює затишок і гарне враження на місці, попри те що цього разу ми замовляли доставку. Чекали хвилин 40, що для суші в принципі непоганий результат. Рекомендую на 100%!",
    "he": "רולים ממש טעימים! נעים להיות מופתעים. הרול המיוחד - גורמה - היה נקודת שיא, טעם מאוד יוצא דופן אבל נעים מאוד. רוצה גם לציין את השירות הנהדר ואת הבחורה הנעימה שיוצרת אווירה חמימה ורושם טוב במקום, למרות שהפעם הזמנו משלוח. חיכינו כ-40 דקות, שזו תוצאה לא רעה בכלל לסושי. ממליץ ב-100%!",
    "en": "Really tasty rolls! Pleasantly surprised. The special gourmet roll was a particular highlight — a very unusual but very pleasant flavor. Also want to mention the great service and the lovely staff member who creates a cozy, welcoming impression, even though this time we ordered delivery. It took about 40 minutes, which is a pretty solid result for sushi. Recommend 100%!"
  },
  "review_kfar_vradim": {
    "ru": "Очень быстрая доставка, дружелюбный персонал и супервкусная еда! 😋 Всё было свежим, красиво упаковано и невероятно вкусным. Очень рекомендую",
    "uk": "Дуже швидка доставка, доброзичливий персонал і супер смачна їжа! 😋 Все було свіжим, гарно упаковано і неймовірно смачним. Дуже рекомендую",
    "he": "משלוח מהיר מאוד, צוות ידידותי ואוכל טעים במיוחד! 😋 הכל היה טרי, ארוז יפה וטעים בצורה מדהימה. ממליצה בחום",
    "en": "Very fast delivery, friendly staff and super delicious food! 😋 Everything was fresh, well packed esthetically and tasted amazing. Highly recommend"
  },
  "review_kate": {
    "ru": "Очень рекомендую! Заказывали суши на день рождения и это было очень вкусно! А также быстрая доставка! Смело можно заказывать много суши на большую компанию, площадь красиво оформлена и вкусно приготовлена! Всем советую 🌸",
    "uk": "Дуже рекомендую! Замовляли суші на день народження і це було дуже смачно! А ще швидка доставка! Сміливо можна замовляти багато суші на велику компанію, все красиво оформлено і смачно приготовано! Всім раджу 🌸",
    "he": "ממליצה בחום! הזמנו סושי ליום הולדת וזה היה טעים מאוד! וגם משלוח מהיר! אפשר להזמין בביטחון הרבה סושי לחברה גדולה, הכל מוגש יפה וטעים! ממליצה לכולם 🌸",
    "en": "Highly recommend! We ordered sushi for a birthday and it was delicious! Plus fast delivery! You can confidently order a big spread for a large group — beautifully presented and deliciously made! Recommend to everyone 🌸"
  },
  "review_sofi": {
    "ru": "Очень вкусные роллы! Обслуживание на высшем уровне, всегда приятно удивляет качество и вкус блюд. Рекомендую всем, кто ценит свежие и качественные суши!",
    "uk": "Дуже смачні роли! Обслуговування на найвищому рівні, завжди приємно дивує якість і смак страв. Рекомендую всім, хто цінує свіжі та якісні суші!",
    "he": "רולים ממש טעימים! השירות ברמה הכי גבוהה, האיכות והטעם תמיד מפתיעים לטובה. ממליצה לכל מי שמעריך סושי טרי ואיכותי!",
    "en": "Really tasty rolls! The service is top-notch, and the quality and flavor always pleasantly surprise. I recommend it to anyone who values fresh, quality sushi!"
  },
  "review_inna": {
    "ru": "Постоянно заказываю здесь суши. Очень вкусно, идеально свежие ингредиенты, всегда много начинки. Часто предлагаются интересные новинки. Всегда точная по времени доставка. Рекомендую от всей души!",
    "uk": "Постійно замовляю тут суші. Дуже смачно, ідеально свіжі інгредієнти, завжди багато начинки. Часто пропонують цікаві новинки. Завжди точна за часом доставка. Рекомендую від щирого серця!",
    "he": "מזמינה כאן סושי כל הזמן. טעים מאוד, מרכיבים טריים במיוחד, ותמיד המון מילוי. לעיתים קרובות מציעים חידושים מעניינים. המשלוח תמיד מדויק בזמן. ממליצה בכל ליבי!",
    "en": "I constantly order sushi here. Very tasty, perfectly fresh ingredients, always generous with the filling. They often offer interesting new items. Delivery is always right on time. Recommend with all my heart!"
  },
  "review_polina": {
    "ru": "Давно заказываю суши только здесь. Сервис, профессионализм, и конечно же вкусные свежие роллы не оставят равнодушным! Делают доставку в Крайот всегда точно в оговоренное время, без опозданий. Честно заслуженные ⭐️⭐️⭐️⭐️⭐️",
    "uk": "Давно замовляю суші тільки тут. Сервіс, професіоналізм, і звісно ж смачні свіжі роли не залишать байдужим! Роблять доставку в Крайот завжди точно у визначений час, без запізнень. Чесно заслужені ⭐️⭐️⭐️⭐️⭐️",
    "he": "כבר הרבה זמן מזמינה סושי רק כאן. השירות, המקצועיות, וכמובן הרולים הטריים והטעימים לא ישאירו אף אחד אדיש! עושים משלוח לקריות תמיד בדיוק בזמן שנקבע, בלי איחורים. ⭐️⭐️⭐️⭐️⭐️ מגיעות בצדק",
    "en": "I've been ordering sushi only here for a long time. The service, professionalism, and of course the tasty fresh rolls won't leave you indifferent! They always deliver to the Krayot area exactly on the agreed time, no delays. Honestly earned ⭐️⭐️⭐️⭐️⭐️"
  },
  "accessibility_title": {
    "ru": "Заявление о доступности",
    "uk": "Заява про доступність",
    "he": "הצהרת נגישות",
    "en": "Accessibility statement"
  },
  "accessibility_intro": {
    "ru": "Мы в Sushi Lovers стремимся сделать сайт удобным для всех гостей, включая людей с ограниченными возможностями.",
    "uk": "Ми в Sushi Lovers прагнемо зробити сайт зручним для всіх гостей, включно з людьми з обмеженими можливостями.",
    "he": "ב-Sushi Lovers אנו שואפים להנגיש את האתר לכל הלקוחות, כולל אנשים עם מוגבלות.",
    "en": "At Sushi Lovers we aim to make our website usable for every guest, including people with disabilities."
  },
  "accessibility_measures": {
    "ru": "Сайт использует семантическую разметку, контрастные цвета, навигацию с клавиатуры, читаемые размеры шрифтов, альтернативные описания изображений и адаптивную вёрстку для мобильных устройств.",
    "uk": "Сайт використовує семантичну розмітку, контрастні кольори, навігацію з клавіатури, читабельні розміри шрифтів, альтернативні описи зображень та адаптивну верстку.",
    "he": "האתר עושה שימוש בתגיות סמנטיות, ניגודיות צבעים, ניווט במקלדת, גדלי גופן קריאים, תיאורים חלופיים לתמונות ועיצוב מותאם למובייל.",
    "en": "The site uses semantic markup, high-contrast colors, keyboard navigation, readable font sizes, alternative image descriptions and a responsive mobile layout."
  },
  "accessibility_limits": {
    "ru": "Несмотря на наши усилия, отдельные элементы могут быть не полностью доступны. Мы продолжаем улучшать сайт и исправлять найденные проблемы.",
    "uk": "Незважаючи на наші намагання, окремі елементи можуть бути не повністю доступними. Ми продовжуємо вдосконалювати сайт та виправляти виявлені проблеми.",
    "he": "על אף מאמצינו, ייתכן שחלק מהרכיבים אינם נגישים במלואם. אנו ממשיכים לשפר את האתר ולתקן תקלות שמתגלות.",
    "en": "Despite our efforts, some elements may not be fully accessible. We keep improving the site and fixing issues we find."
  },
  "accessibility_contact": {
    "ru": "Нашли проблему с доступностью? Свяжитесь с нами:",
    "uk": "Знайшли проблему з доступністю? Зв'яжіться з нами:",
    "he": "נתקלתם בבעיית נגישות? צרו איתנו קשר:",
    "en": "Found an accessibility problem? Contact us:"
  },
  "back_home": {
    "ru": "На главную",
    "uk": "На головну",
    "he": "חזרה לדף הבית",
    "en": "Back home"
  }
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS;
