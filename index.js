// home setup
const contHero = $('contHeroID');
const contGrid = $('contGridID');
const popSheet = $('popSheetID');
const popOverlay = $('popOverlayID');
const btnClose = $('btnCloseID');

let lastCard = null;


// Intro/Hero section
const noFade = matchMedia('(max-width: 860px), (max-height: 540px), (prefers-reduced-motion: reduce)');

function fadeHero(){
    if(noFade.matches){
        contHero.style.cssText = '';
        return;
    }

    const delay = innerHeight*0.5;
    const length = innerHeight*0.9;
    const progress = Math.min(Math.max((scrollY - delay)/length, 0), 1);

    contHero.style.opacity = 1 - progress;
    contHero.style.transform = `translateY(${-progress*70}px) scale(${1 - progress*0.06})`;
    contHero.style.filter = progress > 0.01 ? `blur(${progress*10}px)` : 'none';
}

addEventListener('scroll', fadeHero, {passive: true});
addEventListener('resize', fadeHero);
fadeHero();


// project card setup
function createCard(project){
    const card = document.createElement('button');
    card.className = 'cardProject fxReveal';
    card.innerHTML = `
        <div class="cardThumb"></div>
        <h3>${project.title}</h3>
        <p>${project.tagline}</p>
        <span class="btnMain">View case study</span>`;

    fillFrame(card.querySelector('.cardThumb'), project.thumbnail, project.title);
    card.addEventListener('click', () => openSheet(project, card));
    return card;
}

contGrid.append(...PROJECTS.map(createCard));
observeReveals();

function openSheet(project, card){
    lastCard = card;
    $('popTitleID').textContent = project.title;
    $('popRoleID').textContent = project.role;
    $('popYearID').textContent = project.year;
    $('popDescID').textContent = project.description;

    $('btnCaseID').href = `project.html?p=${project.id}`;
    fillFrame($('popImgID'), project.thumbnail, project.title);

    popSheet.scrollTop = 0;
    popSheet.classList.add('isOpen');
    popOverlay.classList.add('isOpen');
    popSheet.setAttribute('aria-hidden', 'false');
    document.body.classList.add('isLocked');
    btnClose.focus({preventScroll: true});
}

function closeSheet(){
    popSheet.classList.remove('isOpen');
    popOverlay.classList.remove('isOpen');
    popSheet.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('isLocked');
    if(lastCard){
        lastCard.focus({preventScroll: true});
    }
}

btnClose.addEventListener('click', closeSheet);
popOverlay.addEventListener('click', closeSheet);

addEventListener('keydown', e => {
    if(e.key === 'Escape'){
        closeSheet();
    }
});