import Link from "next/link"

export const Navigation = () => {
    return(
      <nav>
            <div style={{display: 'flex', flexDirection:'row'}}>
              <ul style={{display: 'flex', paddingLeft:10 ,listStyleType:'none'}}>
                <li><img src="./ovanos.png" alt="ovanos" width={40} height={40} /></li>
                <li style={{paddingLeft:10}}><Link legacyBehavior href={"/"}><a href="">Home</a></Link></li>
                <li style={{paddingLeft:10}}><Link legacyBehavior href={"/menu"}><a href="">Menu</a></Link></li>
                <li style={{paddingLeft:10}}><Link legacyBehavior href={"/"}><a href="">Contact</a></Link></li>
              </ul>
            </div>
          </nav>
    )
  }