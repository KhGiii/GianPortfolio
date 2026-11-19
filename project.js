const params = new URLSearchParams(location.search);
const project = PROJECTS.find(p => p.id === params.get('p')) || PROJECTS[0];

function boldFirstSentence(text) {
    const end = text.indexOf('. ');
    if(end === -1){
        return text;
    }
    return `<strong>${text.slice(0, end+1)}</strong>${text.slice(end+1)}`;
}

document.title = `${project.title} | Gian's Porto`;
fillFrame($('imgBannerID'), project.banner, project.title);
$('txtTitleID').textContent = project.title;
$('txtTagID').textContent = project.tagline;
$('txtDescID').textContent = project.description;
$('txtRoleID').textContent = project.role;
$('txtYearID').textContent = project.year;
$('txtToolsID').textContent = project.tools;
$('txtProblemID').innerHTML = project.problem;
$('txtSolutionID').innerHTML = project.solution;
$('listGoalsID').innerHTML = project.goals.map(goal => `<li>${goal}</li>`).join('');

const actions = project.links.map(link =>
    `<a class="btnMain" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`
).join('');
$('contActionsID').innerHTML = actions;

// carousel img
const contTrack = $('contTrackID');
const btnPrev = $('btnPrevID');
const btnNext = $('btnNextID');
const contDots = $('contDotsID');
const shots = project.shots.length ? project.shots : ['', '', ''];

const slides = shots.map((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'imgSlide';
    slide.setAttribute('aria-label', `Image ${i+1} of ${shots.length}`);
    fillFrame(slide, src, `${project.title} solution ${i+1}`);
    contTrack.append(slide);
    return slide;
});
const slideStep = () => slides[0].offsetWidth+parseFloat(getComputedStyle(contTrack).columnGap);
const currentSlide = () => Math.min(shots.length - 1, Math.max(0, Math.round(contTrack.scrollLeft/slideStep())));
const goToSlide = i => contTrack.scrollTo({left: i*slideStep(), behavior: 'smooth'});

const dots = shots.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'btnDot';
    dot.setAttribute('aria-label', `Go to image ${i+1}`);
    dot.addEventListener('click', () => goToSlide(i));
    contDots.append(dot);
    return dot;
});

function updateCarousel(){
    const current = currentSlide();
    dots.forEach((dot, i) => {
        dot.classList.toggle('isActive', i === current);
        dot.setAttribute('aria-current', i === current);
    });
    btnPrev.disabled = current === 0;
    btnNext.disabled = current === shots.length-1;
}

btnPrev.addEventListener('click', () => goToSlide(currentSlide()-1));
btnNext.addEventListener('click', () => goToSlide(currentSlide()+1));
contTrack.addEventListener('scroll', updateCarousel, {passive: true});
contTrack.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft'){
        e.preventDefault();
        btnPrev.click();
    }
    if(e.key === 'ArrowRight'){
        e.preventDefault();
        btnNext.click();
    }
});

addEventListener('resize', updateCarousel);

updateCarousel();
observeReveals();