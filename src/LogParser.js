// enable everything
const md = require('markdown-it')({
    html: true,
});

export default (content) => {
    const regex = /{([^}]+)}/g;

    let curMatch = regex.exec(content);

    while (curMatch) {
        content = content.replace(curMatch[0], processMatch(curMatch));

        curMatch = regex.exec(content);
    }

    return md.render(content);
};

const processMatch = (match) => {
    const matchParts = match[1].split(':');

    switch (matchParts.shift().toLowerCase()) {
        case 'c':
            return '<hr class="content__combat--start">';
        case '/c':
            return '<hr class="content__combat--end">';
        case 'a':
            return renderAbilityCheck(...matchParts);
        case 'act':
            return renderAction(...matchParts);
        case 'r':
            return renderRest(...matchParts);
    }

    return match[0];
};

const renderAbilityCheck = (type) => {
    const typeLower = type.toLowerCase();

    return `<span class="tag content__check content__check--${typeLower} is-dark"><i class="fas fa-dice-d20"></i>&nbsp;${type}</span>`;
};

const renderAction = (type, name) => {
    let icon = 'fas fa-forward';

    switch (type.toLowerCase()) {
        case 'spell':
            icon = 'fa fa-scroll';
            break;

        case 'attack':
            icon = 'fa fa-fist-raise';
            break;
    }

    return `<span class="tag content__action is-dark"><i class="${icon}"></i>&nbsp;${name}</span>`;
};

const renderRest = (type) => {
    return `<span class="tag content__rest is-light"><i class="fas fa-campground"></i>&nbsp;${type} Rest</span>`;
};
