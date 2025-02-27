import React, { useState } from 'react';

import { items } from './Combobox.story';
import { Combobox } from './component.export';

export default {
    title: 'Combobox',
    component: Combobox,
};

const ControlledStory = () => {
    const [value, setValue] = useState('');

    return (
        <div style={{ width: '300px' }}>
            <Combobox
                id="single"
                value={value}
                onChange={setValue}
                label="Label"
                placeholder="Placeholder"
                items={items}
            />
        </div>
    );
};

export const Controlled = {
    render: () => <ControlledStory />,
};
// const Controlled = () => {
//     const [value, setValue] = useState('');

//     return (
//         <div style={{ width: '300px' }}>
//             <Combobox
//                 id="single"
//                 value={value}
//                 onChange={setValue}
//                 label="Label"
//                 placeholder="Placeholder"
//                 items={items}
//             />
//         </div>
//     );
// };
// export const ControlledCombobox = {
//     render: () => <Controlled />,
// };

// const ControlledMultiple = () => {
//     const [value, setValue] = useState<Array<string>>([]);

//     return (
//         <div style={{ width: '300px' }}>
//             <Combobox
//                 id="multiple"
//                 value={value}
//                 onChange={setValue}
//                 multiple
//                 label="Label"
//                 placeholder="Placeholder"
//                 items={items}
//             />
//         </div>
//     );
// };

// export const ControlledComboboxMultiple = {
//     render: () => <ControlledMultiple />,
// };

// const Stories = composeStories();
