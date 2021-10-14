import styled from 'styled-components'

export const SectionTitle2 = styled.h2`
  font-weight: 800;
  font-size: 50px;
  line-height: 56px;
  width: max-content;
  max-width: 100%;
  position: relative;
  margin-left: -60px;
  margin-right: 270px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: 17px 0 16px;
  justifyContent: 'space-between'
};

  @media ${props => props.theme.breakpoints.md}{
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 12px;
    padding: 40px 0 12px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    padding: 0;
    max-width: 100%;
  }
`