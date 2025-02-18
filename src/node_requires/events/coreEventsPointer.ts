/* eslint-disable camelcase */
const keyToEventMap = {
    OnPointerClick: 'pointertap',
    OnPointerSecondaryClick: 'rightclick',
    OnPointerEnter: 'pointerenter',
    OnPointerLeave: 'pointerleave',
    OnPointerDown: 'pointerdown',
    OnPointerUp: 'pointerup',
    OnPointerUpOutside: 'pointerupoutside',
    OnPointerWheel: 'wheel'
} as Record<string, string>;

const coreEvents = {} as Record<string, IEventDeclaration>;

for (const key in keyToEventMap) {
    const event = keyToEventMap[key];
    coreEvents[`core_${key}`] = {
        name: key,
        applicable: ['template'],
        icon: 'ui',
        category: 'pointer',
        codeTargets: ['thisOnCreate'],
        inlineCodeTemplates: {
            thisOnCreate: `this.interactive = true;
this.on('${event}', () => {
    \n/*%%USER_CODE%%*/\n
});`
        }
    };
}

export = coreEvents;

