import { INotification } from '../interfaces/inotification';

const notifications: INotification[] = [
    {
        name: 'general',
        unread: 1,
        type: 'channel'
    },
    {
        name: 'kudos',
        type: 'channel'
    },
    {
        name: 'random',
        type: 'channel'
    },
    {
        name: 'technical',
        unread: 24,
        type: 'channel'
    },
    {
        name: 'winwire',
        unread: 20,
        type: 'channel'
    },

    // messages 
    {
        name: 'Mahadevan',
        unread: 1,
        active: true,
        type: 'message'
    },
    {
        name: 'Arun',
        type: 'message'
    },
    {
        name: 'Ashwin',
        type: 'message'
    },
    {
        name: 'Vinoth',
        type: 'message'
    },
    {
        name: 'Karthik',
        type: 'message'
    },
    {
        name: 'Aravind',
        type: 'message'
    }
]

export default notifications