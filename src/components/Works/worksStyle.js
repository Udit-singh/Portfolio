import styled from 'styled-components'

export const ListTemp = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 5px;
  margin: 1rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 24px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 24px 0;
    gap: 12px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 12px 0;
  }
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  flex-direction: column;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  width : 500px;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListSubTitle = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 7px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 21px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 17px;
  line-height: 19px;
  letter-spacing: 0.02em;
  margin-bottom: 3px;
}
`
export const ListDate = styled.h4`
  font-weight: 250;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 7px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 21px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 17px;
  line-height: 19px;
  letter-spacing: 0.02em;
  margin-bottom: 3px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

export const SectionTitle1 = styled.h2`
  font-weight: 800;
  font-size: 50px;
  line-height: 56px;
  width: max-content;
  max-width: 100%;
  position: relative;
  margin-left: -60px;
  margin-right: 360px;
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