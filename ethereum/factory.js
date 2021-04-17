import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xcd8573b4abFF4c45cba55b248C6fB2E298588059'
);

export default instance;