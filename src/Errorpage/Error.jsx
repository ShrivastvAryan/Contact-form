/*
<Routes>
<Route path="*" element={<Error/>}/> that path to * ensures that any other page will show that error 404
</Routes>*/ 

export const Error=()=>{
    return(
        <>
        <section>
            <div>
                <h1>Error 404 page not found</h1>  
            </div>
        </section>
        </>
    )
}