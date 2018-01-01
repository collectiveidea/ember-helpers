import LinkComponent from '@ember/routing/link-component';
import Mixin from '@abcum/ember-helpers/mixins/invoke-action';

export default function() {

	LinkComponent.reopen(Mixin);

}
