import ProductInformation, {
    validation as ProductInformationValidation,
} from './ProductInformation';
import Form, { validation as FormValidation } from './Form';
import Feedback from './Feedback';

export default [
    { component: ProductInformation, validation: ProductInformationValidation },
    { component: Form, validation: FormValidation },
    { component: Feedback },
];
