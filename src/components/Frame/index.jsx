import { Container }  from "./styles"
import { Tag } from "../Tag"
import { Rating } from "../Rating"

export function Frame({data, ...rest}){
    return(
        <Container {...rest}>
            <div>
                <h1>{data.title}</h1>
                <span><Rating 
                        size={10}
                        rating={data.rating}
                    />
                </span>
            </div>
            <main>
                <p>{data.description}
                </p>
            </main>
            <footer>
                {
                    data.tags&& data.tags.map(tag => (
                    <Tag 
                        key={String(tag.id)}
                        title={tag.name}
                    />
                    ))
                }
            </footer>
        </Container>
    )
}