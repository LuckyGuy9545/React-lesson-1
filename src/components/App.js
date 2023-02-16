//* тут собираем все вместе

import PaintingsList from './painting-collection';
import paintings from '../paintings.json';
import Section from './Section';

export default function App() {
  return (
    <div>
      {/* если двойной тег, то то что внутри - ребенок */}
      <Section tittle="Это проп Section и название для секции ребенка PaintingList">
        <PaintingsList items={paintings} />
      </Section>
      {/* если одинарный, то рендер лишь самой секции(эта пустая, поэтому будет пусто) */}
      <Section />
    </div>
  );
}
