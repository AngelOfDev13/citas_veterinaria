const Error = ({children}) => {
    return (
    <div className="bg-red-600 rounded-md p-2 font-bold text-center text-white mb-4 uppercase">
          <p>{children}</p>
    </div>
    )
}

export default Error;