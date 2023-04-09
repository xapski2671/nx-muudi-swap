interface props {
  offMe:Function
  tokens:any[]
}

export default function TokenListModal({ offMe, tokens }:props) {
  return (
    <div className="tlm-reactive" onClick={()=>{offMe()}}>
      <div className="tlm">
        <div className="tlm-grp">
          {tokens.map((token, index)=>{
            return (
              <div key={index} className="tlm-tkn-grp">
                <span className="tlm-tkn-name">{token.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
