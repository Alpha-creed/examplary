
import {FeatureData} from '../../data/FeatureData'
import { Container, Section } from '../../globalStyles';
import { FeatureColumn, FeatureImageWrapper, FeatureName, FeatureText, FeatureTextWrapper, FeatureTitle, FeatureWrapper } from './FeatureStyles';

const Features=()=>{
    const initial={
        y:40,
        opacity:0,
    };
    const animate={
        y:0,
        opacity:1,
    };

    return (
        <Section smPadding="50px 10px" position="relative" inverse id="about">
            <Container>
                <FeatureTextWrapper>
                <FeatureTitle>What we Offer</FeatureTitle>
                </FeatureTextWrapper>
                <FeatureWrapper>
                    {
                        FeatureData.map((el,index)=>(
                            <FeatureColumn
                                initial={initial}
                                animate={animate}
                                transaction={{duration:0.5+index*0.1}}
                                key={index}>
                                    <FeatureImageWrapper className={el.imgClass}>
                                        {el.icon}
                                    </FeatureImageWrapper>
                                    <FeatureName>{el.name}</FeatureName>
                                    <FeatureText>{el.description}</FeatureText>
                                </FeatureColumn>
                        ))
                    }
                </FeatureWrapper>
            </Container>
        </Section>
    )
}
export default Features