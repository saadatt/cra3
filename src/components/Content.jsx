import React from 'react';

function Content(props) {

    let name='Initial';
    const clickButtonHandler =(value) => {
        props.bc(name +value);
        console.log('clicked! ' + name)
    };

    const inputHandler = (e) => {
        name = e.target.value;

        console.log(e.target.value);

    };

    return(
        <main>
            <div className="container">
                <h1 align ='center'>Major Flavors of Streetwear Culture</h1>
                {name}
                <input type='text' onChange = {inputHandler} />

                <button onClick={() => clickButtonHandler(1)}>Add one</button>
                <button onClick={() => clickButtonHandler(2)}>Add two</button>
                <p>
                    There is no denying that streetwear has made its way into luxury fashion. Once reserved for the skater kids
                    and countercultures, it is now as common to see a pair of sneakers and a hoodie on the runways of Paris as
                    it is to find them courtside at a ball game. This fashion revolution means you can choose comfort and
                    convenience, without having to compromise on style. To help you up your street style game, we have rounded up
                    our favorite streetwear brands you need to know.

                </p><br/><br/>

                <p> Supreme is an American skateboarding shop and clothing brand established in New York City in April 1994.
                    The distinctive red box logo with "Supreme" in white Futura Heavy Oblique is largely based on Barbara Kruger's
                    propaganda art. Supreme releases new products through their retail locations around the world as well as their website on
                    Thursday mornings in Europe and America, and on Saturday mornings in Japan. The brand was founded by James
                    Jebbia. The first Supreme store opened in an old office space on Lafayette Street in downtown Manhattan in
                    April 1994. It was designed with skaters in mind with a unique design for the store layout: by arranging the
                    clothes around the perimeter of the store, a large central space permitted skaters with backpacks to skate
                    into the store and still feel comfortable. This store had its core group of skaters who served as its team
                    in 1994, which included late actors Justin Pierce and Harold Hunter, and the first employees were extras from
                    the Larry Clark film Kids.
                </p><br/><br/>
                <p> Yeezys are the intrinsic part of the nowadays streetwear culture. If you consider yourself to be a sneakerhead,
                    Yeezys are a worthwhile investment to add to your collection. The four magical Yeezy flavors: Yeezy Boost 350,
                    Yeezy Boost 350 v2, Yeezy Boost 750, & Yeezy Boost 950. The differences in each model are quite unique. The main
                    thing to remember is the rarer the Yeezy, the higher the value.

                    Kanye West has introduced us to a world where running shoes make big bold fashion statements. Prime examples
                    would be the Yeezy Boost 350 and  350 v2 models. These sneakers were designed to be daily running shoes, but
                    instead, they belong to the high-end fashion footwear category. And while the concept of Athleisure has been
                    around for some time now, it’s sneakers like Yeezys that have given it the biggest boost.


                </p>

             </div>
        </main>
    )
}

export default Content;

