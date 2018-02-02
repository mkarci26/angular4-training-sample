import { trigger, state, animate, transition, style } from '@angular/animations';

export const something =
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({ opacity: 0, left: '-100%' }),

            // animation and styles at end of transition
            animate('.8s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                left: '0',
                opacity: '1',

               }) 
			)
        ]),
		
		transition(':leave', [

            // styles at start of transition
            style({ opacity: 1, left: '0' }),

            // animation and styles at end of transition
            animate('.8s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                left: '-100%',
                opacity: '0',

               }) 
			)
        ]),
    ]);
	