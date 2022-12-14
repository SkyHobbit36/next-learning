import React, { useState } from 'react';
import { Button, Htag, P, Tag } from "../components";
import { Rating } from '../components/Rating/Rating';
import { Layout, withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary" arrow="down">Кнопка</Button> 
      <Button appearance="ghost" arrow="right">Кнопка</Button>
      <P size='small'>
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
      </P>
      <P size='medium'>
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!
      </P>
      <P size='large'>
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
      </P>
      <Tag size='small' color='ghost'>small</Tag>
      <Tag size='medium' color='ghost'>medium</Tag>
      <Tag size='small' color='green'>green</Tag>
      <Tag size='small' color='grey'>grey</Tag>
      <Tag size='medium' color='red'>red</Tag>
      <Tag size='small' color='primary'>primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default  withLayout(Home);
