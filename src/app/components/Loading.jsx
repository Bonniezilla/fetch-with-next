export default function Loading() {
    const array = [1,2,3,4,5,6];

    return (
        <div className="flex flex-col gap-12">
            { array.map((value, index) => {
                return (
                    <div className="loading-movies">
                        {index}
                    </div>
                )
            })}
        </div>
    )
}