import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search.pipe';
import { SearchLocationsPipe } from './search-locations/search-locations.pipe';

@NgModule({
	declarations: [SearchPipe,SearchLocationsPipe],
	imports: [],
	exports: [SearchPipe,SearchLocationsPipe]
})
export class PipesModule {}
