
function getCategories(regularPath)
{
    let p = regularPath;
    let crum=[];
    
    while(p !== '/' && p)
    {
        p = dir_of(p);
        let itm={
            link:'',
            text:''
        };

        if(!p)
        {
            itm.link = '/';
            itm.text='Home'
        }
        else
        {
            itm.link = p;
            itm.text = p.replace('/','');
        }
        
        crum.push(itm);
    }
    return crum.reverse();
}

function dir_of(path)
{
    return path.split("/").slice(0,-1).join("/");
}

module.exports = { getCategories,  dir_of}