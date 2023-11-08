import React from 'react'
import "./Table.css"
function Table() {
    return (
        <div className='table'>

            <p>Контакты</p>

            <span>Свяжитесь с нами</span>

            <div class="grid-container">
                <div class="grid-item">
                    <span>Директор</span>
                    <p>Умаров Анвар Магрупович</p>
                    <strong><span className="m-2" style={{ color: '#F9B101' }} class="material-symbols-outlined">
                        phone_in_talk
                    </span >+998 (99) 028-28-15,</strong>
                </div>
                <div class="grid-item">
                    <span>Зам. директор по производству</span>
                    <p>Хатамбеков Рустам Махмудович</p>
                    <strong><span className="m-2" style={{ color: '#F9B101' }} class="material-symbols-outlined">
                        phone_in_talk
                    </span >+998 (99) 856-11-23</strong></div>
                <div class="grid-item"><span>Зам. директор по коммерческим вопросам</span>
                    <p>Кудратуллаев Баходир Файзуллаевич</p>
                    <strong><span className="m-2" style={{ color: '#F9B101' }} class="material-symbols-outlined">
                        phone_in_talk
                    </span >+998 (99) 856-11-23</strong></div>
                <div class="grid-item"><span>Менеджер по снабжению и сбыту</span>
                    <p>Забиров Сардор Бахтиёрович</p>
                    <strong><span className="m-2" style={{ color: '#F9B101' }} class="material-symbols-outlined">
                        phone_in_talk
                    </span >+998 (99) 099-99-39</strong></div>
                <div class="grid-item"><span>Менеджер по продаже готовой продукции</span>
                    <p>Садыков Абдуллох Уткурович</p>
                    <strong><span className="m-2" style={{ color: '#F9B101' }} class="material-symbols-outlined">
                        phone_in_talk
                    </span >+998 (99) 850-79-99</strong></div>
                <div class="grid-item"><span>Главный бухгалтер</span>
                    <p>УКузнецова Лариса Юрьевна</p>
                    <strong><span className="m-2" style={{ color: '#F9B101' }} class="material-symbols-outlined">
                        phone_in_talk
                    </span >+998 (99) 838-90-52</strong></div>
                <div class="grid-item"><span>Менеджер по ВЭД</span>
                    <p>Зупаров Бекзод Отабекович</p>
                    <strong><span className="m-2" style={{ color: '#F9B101' }} class="material-symbols-outlined">
                        phone_in_talk
                    </span >+998 (99) 028-28-10</strong></div>
                <div class="grid-item"><span>Адрес:</span>
                    <p>Toshkent shahri, Sergeli tumani, TKAD, 70 uy</p>
                </div>
                <div class="grid-item"><span>Почта</span>
                    <p>info@ecoborn.uz</p>
                </div>
            </div></div>
    )
}

export default Table