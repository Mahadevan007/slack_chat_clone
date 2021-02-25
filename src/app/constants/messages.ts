import { IChatMessage } from '../interfaces/ichat-message';

const messages: IChatMessage[] = [
    {
        userId: 'eddieos',
        username: 'Endurance Ekhoragbon',
        message: 'Hello thanks for viewing my slack ui clone',
        image: 'assets/imgs/eddieos.jpeg',
        timestamp: new Date()
    },
    {
        userId: 'eddieos',
        username: 'Endurance Ekhoragbon',
        message: 'Hope you enjoy using it in <strong>bold</strong>',
        image: 'assets/imgs/eddieos.jpeg',
        timestamp: new Date()
    },
    {
        userId: 'theo4u',
        username: 'Theophilus Omoregbee',
        message: 'Thanks <a href="#" class="user-highlight tooltips">Endurance Ekhoragbon</a> this is a very nice slack clone UI',
        image: 'assets/imgs/theophy.jpeg',
        timestamp: new Date()
    }
]

export default messages