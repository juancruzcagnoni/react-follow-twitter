import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: 'vanessa',
        name: 'Vanessa Gonzalez',
        isFollowing: true
    },
    {
        userName: 'johnatan',
        name: 'Johnatan Gomez',
        isFollowing: false
    },
    {
        userName: 'christopher',
        name: 'Christopher Paz',
        isFollowing: true
    },
    {
        userName: 'jennifer',
        name: 'Jennifer Jones',
        isFollowing: false
    },
]

export function App() {
  return (
    <section className="App">
        {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>{name}</TwitterFollowCard>
                )
            })
        }
    </section>
  );
}
