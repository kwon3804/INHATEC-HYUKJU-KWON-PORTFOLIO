

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":937},"pages":[{"id":"page-kwon_portfoli_main","displayName":"KWON_PORTFOLI_MAIN","link":{"linkType":"LinkTypePage","href":"#!page-kwon_portfoli_main"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-project_01","displayName":"PROJECT_01","link":{"linkType":"LinkTypePage","href":"#!page-project_01"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-project_02","displayName":"PROJECT_02","link":{"linkType":"LinkTypePage","href":"#!page-project_02"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true}]}

        $(function() {
            /* hamburger menu */
            $('.close-btn, .open-btn').click(function() {
                $('body').toggleClass('is-not-active is-active');
            });

            /*
                animation widget from here: https://github.com/silexlabs/Silex/issues/443
            */

            window.sr = ScrollReveal({
                distance: '100px'
            });
            sr.reveal('.from-left', { origin:  'left'});
            sr.reveal('.from-right', { origin:  'right'});
            sr.reveal('.from-top', { origin:  'top'});
            sr.reveal('.from-bottom', { origin:  'bottom'});

        })
    