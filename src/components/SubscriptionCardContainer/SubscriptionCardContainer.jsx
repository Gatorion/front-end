import styles from './SubscriptionCardContainer.module.css';

import SubscriptionCard from '../SubscriptionCard/SubscriptionCard'

const SubscriptionCardContainer = () => {
    const juniorSubscription = {
        recommended: false,
        title: 'JÚNIOR',
        description: 'Desbrave o universo com nossos recursos gratuitos',
        price: 'Gratuito',
        pricePeriod: '',
        btnContent: 'CRIAR CONTA',
        btnLink: '#',
        benefitsDescription: 'Garanta benefícios como:',
        benefitsList: [
            'Jogos gratuitos',
            'Conteúdo astronômico',
            'Comunidade astronômica'
        ]
    }

    const plenoSubscription = {
        recommended: true,
        title: 'PLENO',
        description: 'Desbrave o universo com os recursos de um astronauta em ascensão.',
        price: 'R$ 10',
        pricePeriod: '/ mês',
        btnContent: 'CONTRATAR',
        btnLink: '#',
        benefitsDescription: 'Todos os benefícios do JÚNIOR mais vantagens:',
        benefitsList: [
            'Editar posts',
            'Personalizar fundo de perfil',
            'Sem anúncios',
            'Acesso a todos os jogos'
        ]
    }

    const seniorSubscription = {
        recommended: false,
        title: 'SÊNIOR',
        description: 'Desbrave o universo com os recursos de um astronauta experiente',
        price: 'R$ 89.90',
        pricePeriod: '/ ano',
        btnContent: 'CONTRATAR',
        btnLink: '#',
        benefitsDescription: 'Todos os benefícios do PLENO mais vantagens:',
        benefitsList: [
            'Verificação exclusiva'
        ]
    }

    return (
        <div className={styles.container}>
            <SubscriptionCard recommended={juniorSubscription.recommended} title={juniorSubscription.title} description={juniorSubscription.description} price={juniorSubscription.price} pricePeriod={juniorSubscription.pricePeriod} btnContent={juniorSubscription.btnContent} btnLink={juniorSubscription.btnLink} benefitsDescription={juniorSubscription.benefitsDescription} benefitsList={juniorSubscription.benefitsList} />
            <SubscriptionCard recommended={plenoSubscription.recommended} title={plenoSubscription.title} description={plenoSubscription.description} price={plenoSubscription.price} pricePeriod={plenoSubscription.pricePeriod} btnContent={plenoSubscription.btnContent} btnLink={plenoSubscription.btnLink} benefitsDescription={plenoSubscription.benefitsDescription} benefitsList={plenoSubscription.benefitsList} />
            <SubscriptionCard recommended={seniorSubscription.recommended} title={seniorSubscription.title} description={seniorSubscription.description} price={seniorSubscription.price} pricePeriod={seniorSubscription.pricePeriod} btnContent={seniorSubscription.btnContent} btnLink={seniorSubscription.btnLink} benefitsDescription={seniorSubscription.benefitsDescription} benefitsList={seniorSubscription.benefitsList} />
        </div>
    )
}

export default SubscriptionCardContainer;