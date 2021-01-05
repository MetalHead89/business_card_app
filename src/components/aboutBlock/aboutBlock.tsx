import React from 'react';
import '../../scss/aboutBlock.scss';

class AboutBlock extends React.Component {
    render() {
        return (
            <div className='aboutBlock'>
                <div className='aboutBlock__text'>
                    <p>
                        Противоположная точка зрения подразумевает, что элементы политического процесса
                        набирают популярность среди определенных слоев населения, а значит, должны быть
                        ассоциативно распределены по отраслям.
                    </p>
                    <p>
                        Также как разбавленное изрядной долей эмпатии,
                        рациональное мышление в значительной степени обусловливает важность новых принципов
                        формирования материально-технической и кадровой базы. Мы вынуждены отталкиваться
                        от того, что граница обучения кадров предполагает независимые способы реализации
                        инновационных методов управления процессами.
                    </p>
                </div>
                <div className='aboutBlock__photo-wrapper'>
                    <img className='aboutBlock__photo' src="/src/images/photo.png" alt="photo" />
                </div>
            </div>
        );
    }
}

export default AboutBlock;
