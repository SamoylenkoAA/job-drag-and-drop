import React, {useState} from 'react';
import Wrapper from "./Components/UI/Wrapper/Wrapper";
import Block from "./Components/Block/Block";
import Page from "./Components/Page/Page";
import Background from "./Components/UI/Background/Background";
import { data } from './Components/Data/index';
import Button from "./Components/UI/Button/Button";



const App = () => {
    const [pages, setPages] = useState(data);

    const onDropHandler = (item, index, monitor) => {
        const indexPageDrag = item.idPageDrag - 1;
        setPages(prevState => {
            const newPage = prevState.filter(page => page)
            newPage[indexPageDrag].blocks.splice(item.indexBlock, 1);
            newPage[index].blocks.push({title: item.title})
            return newPage;
        })
    }
    const onAddBlockHandler = (e, id) => {
        setPages(prevState => {
            const newPages = [...prevState];
            newPages.find(page => page.id === id)
                .blocks.push({title:'block'});
            return newPages;
        })
    }
    return(
        <Wrapper>
            {
                pages.map((page, indexP) =>{
                    return (
                        <Page
                        key={indexP}
                        index={indexP}
                        page={page}
                        onDrop={onDropHandler}

                        >
                            <Background>
                                {page.blocks
                                    .map((item, indexI) => <Block
                                        key={indexI} indexBlock={indexI} idPageDrag={page.id} item={item}  />)
                                }
                                <Button onAddBlock={(e) => onAddBlockHandler(e, page.id)} />
                            </Background>
                        </Page>
                    )
                })
            }
        </Wrapper>
    )
}
export default App;