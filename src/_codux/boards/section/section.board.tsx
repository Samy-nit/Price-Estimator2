import { createBoard } from '@wixc3/react-board';
import { Section } from '../../../components/section/section';

export default createBoard({
    name: 'Section',
    Board: () => <Section />,
    isSnippet: true,
});
