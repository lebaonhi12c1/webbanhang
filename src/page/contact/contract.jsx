import React, { memo } from 'react';
import FormContact from '../../components/contact/form-contact';

const Contact = memo(() => {
    return (
        <div className='container_box'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2580185560946!2d106.66484217587633!3d10.791539758913014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292cd7e0cf35%3A0x4644c3296282922!2zMTQ1IMSQLiDEkOG6t25nIFbEg24gTmfhu68sIFBoxrDhu51uZyAxNCwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699365342008!5m2!1svi!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <FormContact/>
                </div>
            </div>
        </div>
    );
});

Contact.displayName = 'Contact'
export default Contact;